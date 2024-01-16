import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import bibtexParse from "bibtex-parse-js";
import { Paper } from "@mui/material";
// import { Cite } from 'citation-js';

const Cite = require("citation-js");

function PublicationsHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> The Clarity Project </h1>{" "}
        <p className="hero__subtitle"> Publications </p>{" "}
        <div className={styles.buttons}> </div>{" "}
      </div>{" "}
    </header>
  );
}

const renderCitation = (publication) => {
  const citationString = bibtexParse.toBibtex([publication], false);
  const citation = new Cite(citationString);
  const formattedCitation = citation.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "en-US",
  });
  const url = publication.entryTags.url;
  if (url) {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: formattedCitation }} />
        <a href={url}>Link to Publication</a>
      </div>
    );
  } else {
    return <div dangerouslySetInnerHTML={{ __html: formattedCitation }} />;
  }
};

const PublicationsList = ({ year }) => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("publications.bib")
      .then((response) => response.text())
      .then((data) => {
        const parsedData = bibtexParse.toJSON(data);
        const filteredData = parsedData.filter(
          (publication) => publication.entryTags.year === year.toString()
        );
        setPublications(filteredData);
      });
  }, [year]);

  return (
    <ul>
      {publications.map((publication, index) => (
        <li key={index}>{renderCitation(publication)}</li>
      ))}
    </ul>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch("publications.bib")
      .then((response) => response.text())
      .then((data) => {
        const parsedData = bibtexParse.toJSON(data);
        const uniqueYears = [
          ...new Set(
            parsedData.map((publication) => publication.entryTags.year)
          ),
        ]
          .sort()
          .reverse();
        setYears(uniqueYears);
      });
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <PublicationsHeader />
        <div className="container">
          <Paper sx={{ p: 2, m: 4 }}>
            {years.map((year) => (
              <React.Fragment key={year}>
                <h2>{year}</h2>
                <PublicationsList year={year} />
              </React.Fragment>
            ))}
          </Paper>
        </div>
      </main>{" "}
    </Layout>
  );
}
