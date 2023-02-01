import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./MenuHeader.module.css";

import { URL } from "../../constants";

const MenuHeader = (props) => {
  const url = { URL };
  return (
    <React.Fragment>
      <div className={classes["main-header"]}>
        <h4 className={classes.link1}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to={`${url}/films`}
          >
            Films
          </NavLink>
        </h4>
        <h4 className={classes.link2}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to={`${url}/photo`}
          >
            Photo
          </NavLink>
        </h4>
        <h4 className={classes.link3}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to={`${url}/color`}
          >
            Color
          </NavLink>
        </h4>
        <h4 className={classes.link4}>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to={`${url}/contact`}
          >
            Contact
          </NavLink>
        </h4>
      </div>
    </React.Fragment>
  );
};

export default MenuHeader;
