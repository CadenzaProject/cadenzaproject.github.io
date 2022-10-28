import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CodeBlock from "@theme/CodeBlock";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> {siteConfig.title} </h1>{" "}
        <p className="hero__subtitle"> {siteConfig.tagline} </p>{" "}
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="./about">
            About Us{" "}
          </Link>{" "}
        </div>{" "}
        <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="./test">
          Test{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div>
          <Box sx={{ py: 6, px: 20 }}>
            <p />
            <b>
              How can we process and remix music so it sounds best for those
              with a hearing loss? The new Cadenza project aims to better define
              what music personalised for someone with a hearing loss should
              sound like and exploit the latest in machine learning to create
              improved music listening experiences.
            </b>
            <p />
            The Universities of Salford, Sheffield, Leeds and Nottingham have
            been awarded a grant from the Engineering and Physical Sciences
            Research Council (EPSRC) to investigate adaptations to music for
            those with a hearing loss. The grant of £1.6 million is a
            collaborative partnership with industrial partners BBC R&D, Google
            and Logitech and user engagement via Royal National Institute for
            the Deaf (RNID).
            <p />
            The improvement in music will be achieved by running a series of
            open competitions, which researchers from around the world will
            compete in. Competitors will be given music to enhance, through
            processing and / or remixing. They will be challenged to improve and
            personalise the music for listeners with hearing losses.
            <p />
            <blockquote>
              “Running competitions is a great approach, because it will grow a
              new research community devoted to making music more accessible to
              all.Machine learning has revolutionised audio research, but too
              often it doesn 't consider the diversity of listeners.
              <p />
              I've been an amateur musician since I was at primary school, and
              now realise my hearing isn't what it used to be. I will be one of
              the millions of people in the UK who can hopefully benefit from
              this research”
              <p />
              <i>
                Professor Trevor Cox, Director of the Acoustics Research Centre
                at The University of Salford, and project lead
              </i>
              .
            </blockquote>
            <p />
            People with a hearing loss can experience problems when listening to
            music. 1 in 6 people in the UK has a hearing loss, with this number
            is increasing as the population ages according to the RNID. Poor
            hearing makes music harder to appreciate. This can mean picking out
            lyrics or melody lines is more difficult, and music becomes duller
            as high frequencies disappear. This reduces the enjoyment of music,
            and can lead to disengagement from listening and music-making,
            reducing the health and well-being effects we otherwise get from
            music Hearing aids often work poorly for music because they’re
            optimised for speech. As well as improvements to hearing aids, the
            project will look at other opportunities, such as improving music
            from consumer devices and from mixing desks at live venues.
            <p />
            The project started Summer 2022; first challenges start Spring 2023.
            <p />
            Sign up to our{" "}
            <a href="https://groups.google.com/g/cadenza-challenge">
              Google group
            </a>{" "}
            for alerts about the challenges and to help shape the challenges.
          </Box>
        </div>
      </main>{" "}
    </Layout>
  );
}
