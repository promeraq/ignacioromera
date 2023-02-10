import React from "react";

import Header from "../components/headers/Header";
import Footer from "../components/Footer";

import classes from "./About.module.css";

import cv from "../assets/CV.pdf";

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={classes.about}>
        <h1>Curriculum Vitae</h1>
        <div style={{ backgroundColor: "white", marginLeft: "10%" }}>
          <iframe
            title="my-cv"
            src={cv}
            width="90%"
            height="600px"
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
