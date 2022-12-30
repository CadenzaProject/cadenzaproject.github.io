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
        Quick links:
        <div className={styles.buttons}>
          <Link 
            className="button button--secondary button--lg" to="./about" style={{margin: "10px"}}>
            About Us{" "}
          </Link>{" "}
          
          <Link className="button button--secondary button--lg" to="./docs/cadenza1/cc1_intro" style={{margin: "10px"}}>
          The Current Challenge{" "}
          </Link>{" "}

          <Link className="button button--secondary button--lg" to="./blog" style={{margin: "10px"}}>
          Latest News{" "}
          </Link>{" "}
          
          {/* <Link className="button button--secondary button--lg" to="./test" style={{margin: "10px"}}>
          Test{" "}
          </Link>{" "} */}
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
              improved listening experiences.
            </b>
            <p />
            The improvement in music will be achieved by running a series of
            open signal processing challenges. Competitors will be ask to personalise and enhance music, through
            processing and/or remixing.
            <p />
            <blockquote>
              “Running competitions is a great approach, because it will grow a
              new research community devoted to making music more accessible to
              all. Machine learning has revolutionised audio research, but too
              often it doesn't consider the diversity of listeners.
              <p />
              <i>
                Professor Trevor Cox, The University of Salford
              </i>
              .
            </blockquote>
            <p />
            People with a hearing loss can experience problems when listening to
            music. 430 million people in the World have a disabling hearing loss, with this number
            increasing as the population ages. Poor
            hearing makes music harder to appreciate. This can mean picking out
            lyrics or melody lines is more difficult, and music becomes duller
            as high frequencies disappear. This reduces the enjoyment of music,
            and can lead to disengagement from listening and music-making,
            reducing the health and well-being effects we otherwise get from
            music. Hearing aids often work poorly for music because they’re
            optimised for speech. As well as improvements to hearing aids, the
            project will look at other opportunities, such as improving music
            from consumer devices and from mixing desks at live venues.
            <p />
            <p />
            The project is run by Universities of Salford, Sheffield, Leeds and Nottingham and
			funded by the Engineering and Physical Sciences
            Research Council (EPSRC). Industrial partners are BBC R&D, Google
            and Logitech; user engagement via Royal National Institute for
            the Deaf (RNID), and additional academic input from Oldenburg University.			
            <p />
			The first challenge starts Spring 2023.
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
