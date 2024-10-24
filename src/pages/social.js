import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
import { SiZenodo, SiHuggingface } from "react-icons/si";

function SocialHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"> Find Us Online </h1>
          <p className="hero__subtitle"> Explore our social networks </p>
        </div>
      </header>
  );
}

export default function Social() {
  const { siteConfig } = useDocusaurusContext();

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/groups/12779283/",
      icon: <FaLinkedin size={60} />,
    },
    {
      name: "Twitter",
      url: "https://x.com/CadenzaChalleng",
      icon: <FaTwitter size={60} />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@claritychallenge3895",
      icon: <FaYoutube size={60} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/claritychallenge/clarity",
      icon: <FaGithub size={60} />,
    },
    {
      name: "Zenodo",
      url: "https://zenodo.org/communities/cadenzachallenge/records?q=&l=list&p=1&s=10&sort=newest",
      icon: <SiZenodo size={60} />,
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co/cadenzachallenge",
      icon: <SiHuggingface size={60} />,
    },
  ];

  return (
      <Layout title="Social Links" description="Find us on various platforms">
        <main>
          <SocialHeader />

          <Box sx={{ p: 6 }}>
            {/*<Typography variant="h6">*/}
            {/*  You can also find us on different social networks:*/}
            {/*</Typography>*/}

            <Grid container spacing={4} sx={{ mt: 4 }}>
              {links.map((link, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper sx={{ p: 2, textAlign: "center" }}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                        <Typography variant="h6">{link.name}</Typography>
                      </a>
                    </Paper>
                  </Grid>
              ))}
            </Grid>
          </Box>
        </main>
      </Layout>
  );
}
