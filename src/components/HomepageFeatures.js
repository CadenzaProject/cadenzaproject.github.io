import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Code on Github",
    Svg: require("../../static/img/undraw_version_control_re_mg66.svg").default,
    description: (
      <>
        All the code for the Cadenza Project will be open sourced and{" "}
        <a href="https://github.com/cadenzaproject/">available on Github </a>.{" "}
      </>
    ),
    link: "https://github.com/cadenzaproject/",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>{" "}
      </div>{" "}
      <div className="text--center padding-horiz--md">
        <h3> {title} </h3> <p> {description} </p>{" "}
      </div>{" "}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {" "}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
