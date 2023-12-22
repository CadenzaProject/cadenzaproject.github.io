import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function ContactHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> The Cadenza Project </h1>{" "}
        <p className="hero__subtitle"> Contact Us </p>{" "}
        <div className={styles.buttons}> </div>{" "}
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
      <main>
        <ContactHeader />

        <Box sx={{ p: 6 }}>
          <h2>Contact Us</h2>
          <p>
            <Typography variant="h6">
              Please feel free to contact us. We are always keen to receive
              input and feedback from the community.
            </Typography>
          </p>
          <Paper sx={{ p: 2, m: 4 }}>
            <h3>General enquiries</h3>
            For general enquiries about the project or our future plans please
            email us via{" "}
            <a href="mailto:cadenzachallengecontact@gmail.com">
              cadenzachallengecontact@gmail.com
            </a>
          </Paper>
          <Paper sx={{ p: 2, m: 4 }}>
            <h3>For questions about the current challenge</h3>
            If you have questions about the current challenge (e.g., uncertainty
            about the rules) please consider posting the question on our{" "}
            <a href="https://groups.google.com/g/cadenza-challenge">
              Cadenza Challenge Google group
            </a>
            .
          </Paper>
          <Paper sx={{ p: 2, m: 4 }}>
            <h3>Reporting software issues</h3>
            For issues relating the the Cadenza software please consider raising
            an 'issue' on our{" "}
            <a href="https://github.com/claritychallenge/clarity">
              Clarity-Cadenza GitHub site
            </a>
            . We are also happy for people to use the GitHub issues to raise
            feature requests.
          </Paper>
          <Paper sx={{ p: 2, m: 4 }}>
            <h3>Contacting individual team members</h3>
            If you wish to contact a specific team member you will find
            individual contact details via the links on our{" "}
            <a href="../about">About Us</a> page
          </Paper>
          <Paper sx={{ p: 2, m: 4 }}>
            <h3>Media contact</h3>
				Please email {" "}
            <a href="mailto:t.j.cox@salford.ac.uk">
             Trevor Cox
			 </a>
          </Paper>		  
        </Box>
      </main>{" "}
    </Layout>
  );
}
