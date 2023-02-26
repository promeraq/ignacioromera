import React from "react";

import Header from "../components/headers/Header";
import Footer from "../components/Footer";

import classes from "./About.module.css";

import cv from "../assets/CV.pdf";

const About = () => {
  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Header />
      <div className={classes.about}>
        <h1 className={classes.title}>Curriculum Vitae</h1>
        <div
          style={{
            backgroundColor: "white",
            marginLeft: "10%",
          }}
        >
          <iframe
            title="my-cv"
            src={cv}
            width="90%"
            height="800px"
            background-color="white"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

// App
export default About;
