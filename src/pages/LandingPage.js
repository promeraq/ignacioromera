import React from "react";

import classes from "./LandingPage.module.css";
import Icon from "../components/Icon";

const LandingPage = (props) => {
  return (
    <React.Fragment>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div className={classes.body}>
        <p className={classes.audiovisual}>Audiovisual</p>
        <h1 className={classes.inaxio}>IGNACIO</h1>
        <h1 className={classes.romera}>ROMERA</h1>
        <p className={classes.content}>content creator</p>
        <div className={classes.icon}>
          <button className={classes.bttn} onClick={props.onClick}>
            <Icon />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

// App
export default LandingPage;
