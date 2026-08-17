#!/usr/bin/env python3
"""
Fetch Google Scholar citation counts for publications.bib entries and
write them to static/citations.json, keyed by BibTeX cite key.

Usage:
    pip install requests bibtexparser
    python scripts/fetch_scholar_citations.py --user BfYwEGMAAAAJ

Requires each bib entry you want a badge for to have a `scholarid`
field containing just the paper id (the part after the colon in
`citation_for_view`, not the user id):

    @article{mykey,
      title    = {...},
      ...
      scholarid = {u5HHmVD_uO8C},
    }

Get that value by opening your own Scholar profile, clicking the paper,
and copying the URL's `citation_for_view=USERID:PAPERID` part -- keep
only the PAPERID (after the colon). The user id comes from --user
instead, so if you ever change/merge Scholar profiles, you only update
the one --user flag rather than every bib entry.

Output format (static/citations.json):
{
  "mykey": {
    "count": 46,
    "url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BfYwEGMAAAAJ&citation_for_view=BfYwEGMAAAAJ:u5HHmVD_uO8C"
  },
  ...
}

Entries without a `scholarid` are skipped (listed in
scripts/scholar_unmatched.txt) rather than guessed at.

Notes:
- Google Scholar still rate-limits (429) occasionally, especially from
  shared CI IPs. When that happens for a given paper, this script keeps
  whatever count was already in citations.json for it (rather than
  wiping it to 0/missing) and tries again next run -- same behavior as
  al-folio's plugin.
"""

import argparse
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
    import requests
except ImportError:
    sys.exit("Missing dependency: pip install requests")

ROOT = Path(__file__).resolve().parent.parent
BIB_PATH = ROOT / "static" / "publications.bib"
OUT_PATH = ROOT / "static" / "citations.json"
UNMATCHED_PATH = ROOT / "scripts" / "scholar_unmatched.txt"

REQUEST_DELAY_SECONDS = 2  # be polite between requests
REQUEST_TIMEOUT_SECONDS = 15

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
}

CITED_BY_RE = re.compile(r"Cited by (\d+)")

# Phrases Google Scholar's block/CAPTCHA interstitial pages contain.
# These pages can still be HTTP 200 and can still coincidentally contain
# the string "citation_for_view" (e.g. echoing the requested URL back),
# so a mere substring check isn't reliable evidence of a real page.
BLOCK_PAGE_INDICATORS = (
    "detected unusual traffic",
    "not a robot",
    "recaptcha",
    "gs_captcha",
)

# A marker that only appears on a genuine citation_for_view page (the
# title heading's element id). Used as positive evidence, not just the
# absence of block phrases.
GENUINE_PAGE_MARKER = "gsc_oci_title"


def load_bib_entries(bib_path: Path):
    with open(bib_path, encoding="utf-8") as f:
        bib_database = bibtexparser.load(f)
    entries = []
    for entry in bib_database.entries:
        key = entry.get("ID")
        paper_id = entry.get("scholarid", "").strip()
        # Backwards-compat: if someone pastes the full "USERID:PAPERID"
        # form (e.g. copy-pasted straight from an old entry), just take
        # the part after the colon.
        if ":" in paper_id:
            paper_id = paper_id.split(":", 1)[1]
        if key:
            entries.append({"key": key, "paper_id": paper_id})
    return entries


def load_existing_citations(out_path: Path):
    if out_path.exists():
        try:
            with open(out_path, encoding="utf-8") as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            pass
    return {}


def fetch_citation_count(user_id: str, paper_id: str):
    """
    paper_id is just the PAPERID part (not USERID:PAPERID). Returns
    (count, url): count is an int, or None if it couldn't be fetched
    this run (e.g. blocked/rate-limited).
    """
    url = (
        "https://scholar.google.com/citations?view_op=view_citation"
        f"&hl=en&user={user_id}&citation_for_view={user_id}:{paper_id}"
    )
    try:
        resp = requests.get(url, headers=HEADERS, timeout=REQUEST_TIMEOUT_SECONDS)
    except requests.RequestException as e:
        print(f"  Request failed: {type(e).__name__}: {e}")
        return None, url

    if resp.status_code != 200:
        print(f"  HTTP {resp.status_code} -- likely rate-limited, skipping for now")
        return None, url

    text_lower = resp.text.lower()
    if any(indicator in text_lower for indicator in BLOCK_PAGE_INDICATORS):
        print("  Response looks like a Scholar block/CAPTCHA page -- skipping")
        return None, url

    match = CITED_BY_RE.search(resp.text)
    if match:
        return int(match.group(1)), url

    if GENUINE_PAGE_MARKER in resp.text:
        # Confirmed a real citation page, and it has no "Cited by" text
        # -- that genuinely means 0 citations.
        return 0, url

    # Neither a match nor confirmed to be a real page nor a recognized
    # block phrase -- ambiguous. Don't guess; treat as "couldn't fetch".
    print("  Response didn't look like a recognizable citation page -- skipping")
    return None, url


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

    results = load_existing_citations(out_path)
    missing_scholar_id = []
    failed = []

    with_id = [e for e in bib_entries if e["paper_id"]]
    without_id = [e for e in bib_entries if not e["paper_id"]]
    missing_scholar_id.extend(
        f"{e['key']}: no `scholarid` field set -- add one to get a badge" for e in without_id
    )

    for i, entry in enumerate(with_id, start=1):
        print(f"[{i}/{len(with_id)}] {entry['key']} ({entry['paper_id']})")
        count, url = fetch_citation_count(args.user, entry["paper_id"])
        if count is None:
            failed.append(f"{entry['key']}: fetch failed this run, keeping previous value if any")
        else:
            results[entry["key"]] = {"count": count, "url": url}
        if i < len(with_id):
            time.sleep(REQUEST_DELAY_SECONDS)

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, sort_keys=True)
    print(f"Wrote {len(results)} citation counts to {out_path}")

    notes = missing_scholar_id + failed
    if notes:
        UNMATCHED_PATH.parent.mkdir(parents=True, exist_ok=True)
        with open(UNMATCHED_PATH, "w", encoding="utf-8") as f:
            f.write("\n".join(notes))
        print(f"NOTE: {len(notes)} entries need attention -- see {UNMATCHED_PATH}")


if __name__ == "__main__":
    main()