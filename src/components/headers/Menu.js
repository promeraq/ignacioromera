import React from "react";

import { Link } from "react-router-dom";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <React.Fragment>
      <nav className={classes.navbar}>
        <Link className={classes.link1} to="/">
          <h4 className={classes.inaxio}>IGNACIO ROMERA</h4>
        </Link>
        <div className={classes["menu-icon"]}>
          <i className={"fa-sharp fa-solid fa-xmark"} onClick={props.onClose} />
        </div>
        <div className={classes.main}>
          <h2 className={classes.headmenu}>Menu</h2>
          <ul className={classes.menu}>
            <li className={classes.item}>
              <Link className={classes.link} to="/films">
                Films
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/photo">
                Photo
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/color">
                Color
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/illustrations">
                Illustrations
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/about">
                About
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
