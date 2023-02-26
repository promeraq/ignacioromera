import React from "react";

import classes from "./LandingPage.module.css";
import Icon from "../components/Icon";

const LandingPage = (props) => {
  return (
    <React.Fragment>
      <meta
        name="viewport"
        content="width=device-width,
                       initial-scale=1"
      />
      <div className={classes.body}>
        <div className={classes.text}>
          <p className={classes.audiovisual}>Audiovisual</p>
          <h1 className={classes.inaxio}>IGNACIO ROMERA</h1>
          <p className={classes.content}>content creator</p>
        </div>
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
