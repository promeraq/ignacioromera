import React from "react";

import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";

import { URL } from "../../constants";

const MainHeader = (props) => {
  const url = URL;
  return (
    <React.Fragment>
      <div className={classes["main-header"]}>
        <Link to={`${url}`}>
          <h4 className={classes.inaxio}>IGNACIO ROMERA</h4>
        </Link>
        <h4 className={classes.barra}>|</h4>
        <Link to={`${url}/about`}>
          <p className={classes.about}>About</p>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
