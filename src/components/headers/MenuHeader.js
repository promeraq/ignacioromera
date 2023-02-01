import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./MenuHeader.module.css";

const MenuHeader = (props) => {
  return (
    <React.Fragment>
      <div className={classes["main-header"]}>
        <h4 className={classes.link1}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/films"
          >
            Films
          </NavLink>
        </h4>
        <h4 className={classes.link2}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/photo"
          >
            Photo
          </NavLink>
        </h4>
        <h4 className={classes.link3}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/color"
          >
            Color
          </NavLink>
        </h4>
        <h4 className={classes.link4}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </h4>
      </div>
    </React.Fragment>
  );
};

export default MenuHeader;
