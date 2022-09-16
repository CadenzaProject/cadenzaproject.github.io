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
        <p className="hero__subtitle"> About Us </p>{" "}
        <div className={styles.buttons}> </div>{" "}
      </div>{" "}
    </header>
  );
}

function PersonCard({ name, affiliation, avatar, url }) {
  return [
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt={name}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={useBaseUrl(avatar)}
            sx={{ width: 104, height: 104 }}
          />
        }
        title={name}
        subheader={affiliation}
        titleTypographyProps={{ variant: "h5" }}
        subheaderTypographyProps={{ variant: "h7" }}
      />
      <CardActions>
        <Button href={url} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>,
  ];
}

function SteeringPersonCard({ name, affiliation, avatar, url }) {
  return [
    <Zoom>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={name}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={useBaseUrl(avatar)}
              sx={{ width: 104, height: 104 }}
            />
          }
          title={name}
          subheader={affiliation}
          titleTypographyProps={{ variant: "h5" }}
          subheaderTypographyProps={{ variant: "h7" }}
        />
      </Card>
    </Zoom>,
  ];
}

const SteeringPersonList = [
  {
    name: "Alan Archer-Boyd",
    affiliation: "BBC",
    avatar: "/img/avatar/archer-boyd.jpeg",
  },
  {
    name: "Richard F. Lyon",
    affiliation: "Google",
    avatar: "/img/avatar/lyon.jpeg",
  },
  {
    name: "Andrew Harper",
    affiliation: "Logitech",
    avatar: "/img/avatar/harper.jpeg",
  },
  {
    name: "Volker Hohmann",
    affiliation: "Universität Oldenburg",
    avatar: "/img/avatar/hohmann.png",
  },
  {
    name: "Ralph Holme",
    affiliation: "Royal National Institute for the Deaf",
    avatar: "/img/avatar/holme.jpeg",
  },
  {
    name: "Stefan Launer",
    affiliation: "Sonova",
    avatar: "/img/avatar/launer.jpeg",
  },
];
const PersonList = [
  {
    name: "Michael Akeroyd",
    department: "School of Medicine",
    affiliation: "University of Nottingham",
    url: "https://www.nottingham.ac.uk/medicine/people/michael.akeroyd",
    avatar: "/img/avatar/akeroyd.jpeg",
  },
  {
    name: "Scott Bannister",
    department: "School of Music",
    affiliation: "University of Leeds",
    url: "https://ahc.leeds.ac.uk/music/staff/3358/dr-scott-bannister",
    avatar: "/img/avatar/bannister.jpeg",
  },
  {
    name: "Jon Barker",
    department: "Department of Computer Science",
    affiliation: "University of Sheffield",
    url: "https://www.sheffield.ac.uk/dcs/people/academic/jon-barker",
    avatar: "/img/avatar/barker.png",
  },
  {
    name: "Trevor Cox",
    department: "School of Science, Engineering and Environment",
    affiliation: "University of Salford",
    url: "https://www.salford.ac.uk/our-staff/trevor-cox",
    avatar: "/img/avatar/cox.jpeg",
  },
  {
    name: "Bruno Fazenda",
    department: "School of Science, Engineering and Environment",
    affiliation: "University of Salford",
    url: "https://www.salford.ac.uk/our-staff/bruno-fazenda",
    avatar: "/img/avatar/fazenda.jpeg",
  },
  {
    name: "Simone Graetzer",
    department: "School of Science, Engineering and Environment",
    affiliation: "University of Salford",
    url: "https://www.salford.ac.uk/our-staff/simone-graetzer",
    avatar: "/img/avatar/graetzer.png",
  },
  {
    name: "Alinka Greasley",
    department: "School of Music",
    affiliation: "University of Leeds",
    url: "https://ahc.leeds.ac.uk/music/staff/286/dr-alinka-greasley",
    avatar: "/img/avatar/greasley.jpeg",
  },
  {
    name: "Graham Naylor",
    department: "School of Medicine",
    affiliation: "University of Nottingham",
    url: "https://www.nottingham.ac.uk/medicine/people/graham.naylor",
    avatar: "/img/avatar/naylor.jpeg",
  },
  {
    name: "Gerardo Roa",
    department: "Department of Computer Science",
    affiliation: "University of Sheffield",
    url: "https://www.sheffield.ac.uk/dcs/people/research-staff/gerardo-roa-dabike",
    avatar: "/img/avatar/roa.jpeg",
  },
  {
    name: "Rebecca Vos",
    department: "Faculty of Engineering, Department of Electrical and Electronic Engineering",
    affiliation: "Imperial College London",
    url: "https://www.imperial.ac.uk/people/r.vos",
    avatar: "/img/avatar/vos.jpeg",
  },
  {
    name: "William Whitmer",
    affiliation: "University of Nottingham",
    department: "School of Medicine",
    url: "https://www.nottingham.ac.uk/medicine/people/bill.whitmer",
    avatar: "/img/avatar/whitmer.jpeg",
  },
];

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
              The Cadenza Project is a{" "}
              <b>
                <a href="https://www.ukri.org/councils/epsrc/">
                  5-year UKRI-funded research project
                </a>
              </b>{" "}
              involving{" "}
              <b>
                <a href="#team">four UK Universities</a>
              </b>{" "}
              and{" "}
              <b>
                <a href="#partners">associated industrial partners</a>
              </b>
              . Our aim is to organise open evaluations for music processing
              algorithms for improving the experience of hearing impaired
              listeners.{" "}
            </Typography>
          </p>

          <p>Text here etc</p>

          <a id="team" />
          <h2> The Cadenza Team</h2>
          <Grid container px={10} spacing={5}>
            {PersonList.map((props, idx) => (
              <GridItem style={{ minWidth: "300px" }} item xs={6}>
                <PersonCard key={idx} {...props} />
              </GridItem>
            ))}
          </Grid>

          <Box py={5}>
            <h2> The Cadenza Steering Committee</h2>

            <Grid container px={10} spacing={5}>
              {SteeringPersonList.map((props, idx) => (
                <GridItem style={{ minWidth: "300px" }} item xs={6}>
                  <SteeringPersonCard key={idx} {...props} />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Box>
            <a id="partners" />
            <h2> Our Cadenza Partners</h2>

            <Box style={{ textAlign: "center" }}>
              <Box
                component="img"
                style={{marginLeft: '2rem', marginRight: '4rem' }}
                sx={{
                  height: 100,
                }}
                alt="RNID logo."
                src={useBaseUrl("img/logos/RNID-logo.jpeg")}
              />
              <Box
                  component="img"
                  style={{marginLeft: '10rem', marginRight: 'rem' }}
                  sx={{
                    height: 100,
                  }}
                  alt="Logitech logo."
                  src={useBaseUrl("img/logos/logitech-logo.png")}
              />
              <Box
                  component="img"
                  style={{marginLeft: '10rem', marginRight: '0rem' }}
                  sx={{
                    height: 100,
                  }}
                  alt="Oldenburg logo."
                  src={useBaseUrl("img/logos/oldenburg-logo.jpeg")}
              />
              <br></br>
              <Box
                  component="img"
                  style={{marginLeft: '5rem', marginRight: '0rem' }}
                  sx={{
                    height: 100,
                  }}
                  alt="Google logo."
                  src={useBaseUrl("img/logos/google-logo.png")}
              />
              <Box
                  component="img"
                  style={{marginLeft: '5rem', marginRight: '0rem' }}
                  sx={{
                    height: 100,
                  }}
                  alt="Sonova logo."
                  src={useBaseUrl("img/logos/sonova-logo.png")}
              />
              <Box
                  component="img"
                  style={{marginLeft: '5rem', marginRight: '10rem' }}
                  sx={{
                    height: 100,
                  }}
                  alt="BBC logo."
                  src={useBaseUrl("img/logos/bbc-logo.png")}
              />
            </Box>
          </Box>

          <Box py={5}>
            <h2> Thanks to our funders</h2>
            <Box style={{ textAlign: "center" }}>
              <Box
                style={{ textAlign: "center" }}
                component="img"
                sx={{
                  height: 100,
                }}
                alt="EPSRC logo."
                src={useBaseUrl(
                  "img/logos/UKRI_EPSR_Council-Logo_Horiz-RGB.png"
                )}
              />
            </Box>
          </Box>
        </Box>
      </main>{" "}
    </Layout>
  );
}
