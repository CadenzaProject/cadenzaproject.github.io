import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import GridItem from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function AboutHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> The Cadenza Project </h1>{" "}
        <p className="hero__subtitle"> Test </p>{" "}
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
        <AboutHeader />

        <Box sx={{ p: 6 }}>
          <h2>About Us</h2>

          <p>
            <Typography variant="h6">
              Some text here
            </Typography>
          </p>

        </Box>
      </main>{" "}
    </Layout>
  );
}
