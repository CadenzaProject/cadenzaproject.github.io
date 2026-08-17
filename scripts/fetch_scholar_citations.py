#!/usr/bin/env python3
"""
Fetch Google Scholar citation counts for every entry in publications.bib
and write them to static/citations.json, keyed by BibTeX cite key.

Usage:
    pip install scholarly bibtexparser
    python scripts/fetch_scholar_citations.py --user BfYwEGMAAAAJ

Output format (static/citations.json):
{
  "roadabike2019_interspeech": {
    "count": 46,
    "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BfYwEGMAAAAJ&citation_for_view=BfYwEGMAAAAJ:u5HHmVD_uO8C"
  },
  ...
}

Notes:
- Google Scholar has no official API and aggressively rate-limits/blocks
  scraping, so this is designed to run occasionally (e.g. weekly via a
  scheduled GitHub Action), not on every page load.
- Matching between your .bib entries and Scholar's publication list is
  done by fuzzy-matching the title (case/punctuation-insensitive). If a
  match can't be found confidently, that entry is skipped and a warning
  is printed -- check scholar_unmatched.txt afterwards.
- If Scholar starts blocking requests (common on shared IPs like GitHub
  Actions runners), try the `scholarly.use_proxy` options documented at
  https://github.com/scholarly-python-package/scholarly, or fall back to
  running this locally and committing the JSON manually.
"""

import argparse
import difflib
import json
import re
import sys
import time
from pathlib import Path

try:
    import bibtexparser
except ImportError:
    sys.exit("Missing dependency: pip install bibtexparser")

try:
    from scholarly import scholarly
except ImportError:
    sys.exit("Missing dependency: pip install scholarly")

ROOT = Path(__file__).resolve().parent.parent
BIB_PATH = ROOT / "static" / "publications.bib"
OUT_PATH = ROOT / "static" / "citations.json"
UNMATCHED_PATH = ROOT / "scripts" / "scholar_unmatched.txt"

MATCH_THRESHOLD = 0.80  # 0-1, how similar titles must be to count as a match


def normalize_title(title: str) -> str:
    title = re.sub(r"[{}]", "", title)  # strip bibtex brace-protection
    title = title.lower()
    title = re.sub(r"[^a-z0-9 ]", " ", title)
    title = re.sub(r"\s+", " ", title).strip()
    return title


def load_bib_entries(bib_path: Path):
    with open(bib_path, encoding="utf-8") as f:
        bib_database = bibtexparser.load(f)
    entries = []
    for entry in bib_database.entries:
        key = entry.get("ID")
        title = entry.get("title", "")
        # Optional manual override: add `scholarid = {USERID:PUBID}` to a
        # bib entry (the part after user= and citation_for_view= in a
        # Scholar citation URL) to skip fuzzy title matching entirely.
        scholar_id = entry.get("scholarid", "").strip()
        if key and (title or scholar_id):
            entries.append({
                "key": key,
                "title": title,
                "norm_title": normalize_title(title) if title else "",
                "scholar_id": scholar_id,
            })
    return entries


def fetch_scholar_publications(user_id: str):
    print(f"Fetching Scholar author profile for user={user_id} ...")
    author = scholarly.search_author_id(user_id)
    author = scholarly.fill(author, sections=["publications"])
    pubs = []
    for i, pub in enumerate(author["publications"], start=1):
        bib = pub.get("bib", {})
        title = bib.get("title", "")
        if not title:
            continue
        # author_pub_id looks like "USERID:XXXXXXXXXXX" and is what
        # citation_for_view needs in the URL.
        author_pub_id = pub.get("author_pub_id", "")
        pubs.append({
            "title": title,
            "norm_title": normalize_title(title),
            "num_citations": pub.get("num_citations", 0),
            "author_pub_id": author_pub_id,
        })
        # Be polite / reduce chance of getting blocked.
        time.sleep(1)
    print(f"Fetched {len(pubs)} publications from Scholar.")
    return pubs


def match_entries(bib_entries, scholar_pubs, user_id: str):
    results = {}
    unmatched = []
    pubs_by_id = {p["author_pub_id"]: p for p in scholar_pubs if p["author_pub_id"]}

    for entry in bib_entries:
        matched_pub = None

        # 1. Manual override via `scholarid = {USERID:PUBID}` in the bib entry.
        if entry["scholar_id"]:
            matched_pub = pubs_by_id.get(entry["scholar_id"])
            if not matched_pub:
                unmatched.append(
                    f"{entry['key']}: scholarid '{entry['scholar_id']}' set but not found "
                    "in this author's publication list -- check it's correct"
                )
                continue
        else:
            # 2. Fall back to fuzzy title matching.
            best = None
            best_score = 0.0
            for pub in scholar_pubs:
                score = difflib.SequenceMatcher(None, entry["norm_title"], pub["norm_title"]).ratio()
                if score > best_score:
                    best_score = score
                    best = pub
            if best and best_score >= MATCH_THRESHOLD:
                matched_pub = best
            else:
                unmatched.append(
                    f"{entry['key']}: {entry['title']} (best score {best_score:.2f} -- "
                    "consider adding a `scholarid = {{USERID:PUBID}}` override)"
                )
                continue

        author_pub_id = matched_pub["author_pub_id"]
        url = (
            "https://scholar.google.com/citations?view_op=view_citation"
            f"&hl=en&user={user_id}&citation_for_view={author_pub_id}"
        )
        results[entry["key"]] = {
            "count": matched_pub["num_citations"],
            "url": url,
        }

    return results, unmatched


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--user", required=True, help="Google Scholar user ID, e.g. BfYwEGMAAAAJ")
    parser.add_argument("--bib", default=str(BIB_PATH), help="Path to publications.bib")
    parser.add_argument("--out", default=str(OUT_PATH), help="Path to write citations.json")
    args = parser.parse_args()

    bib_path = Path(args.bib)
    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    bib_entries = load_bib_entries(bib_path)
    print(f"Loaded {len(bib_entries)} entries from {bib_path}")

    scholar_pubs = fetch_scholar_publications(args.user)
    results, unmatched = match_entries(bib_entries, scholar_pubs, args.user)

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, sort_keys=True)
    print(f"Wrote {len(results)} matched citation counts to {out_path}")

    if unmatched:
        UNMATCHED_PATH.parent.mkdir(parents=True, exist_ok=True)
        with open(UNMATCHED_PATH, "w", encoding="utf-8") as f:
            f.write("\n".join(unmatched))
        print(f"WARNING: {len(unmatched)} entries could not be matched confidently.")
        print(f"See {UNMATCHED_PATH} -- you may need to fix titles or raise/lower MATCH_THRESHOLD.")


if __name__ == "__main__":
    main()