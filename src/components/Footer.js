import React from "react";

import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import image from "../assets/footer.png";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className={classes.footerbody}>
        {/*         <p className={classes.audiovisual}>Audiovisual</p>
        <h1 className={classes.inaxio}>IGNACIO</h1>
        <h1 className={classes.romera}>ROMERA</h1>
        <h4 className={classes.content}>content creator</h4>
        <p>
          Director and film maker getting into the audiovisual world,
          <br />
          by doing different activities like video, photography, and design.
          <br />
          Characterized as an open-minded artist that is prepared to achieve
          excellence in any task needed.
        </p> */}
        <div className={classes.image}>
          <img className={classes.img} src={image} alt="img" />
        </div>
        <h5>Contact</h5>
        <h4 className={classes.contact}>ignacioromera3@gmail.com</h4>
        <Link className={classes.link} to="https://www.elmundo.es">
          <h4 className={classes.pr}>web design by PABLO ROMERA</h4>
        </Link>
      </div>
    </React.Fragment>
  );
};

// App
export default Footer;
