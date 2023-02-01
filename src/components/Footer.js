import React from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className={classes.footerbody}>
        <p className={classes.audiovisual}>Audiovisual</p>
        <h1 className={classes.inaxio}>IGNACIO</h1>
        <h1 className={classes.romera}>ROMERA</h1>
        <h4 className={classes.content}>web design by Pablo Romera</h4>
        <p>
          Director and film maker getting into the audiovisual world,
          <br />
          by doing different activities like video, photography, and design.
          <br />
          Characterized as an open-minded "artist" that is prepared to achieve
          excellence in any task needed.
        </p>
        <h5>Contact</h5>
        <h4 className={classes.contact}>ignacioromera3@gmail.com</h4>
      </div>
    </React.Fragment>
  );
};

// App
export default Footer;
