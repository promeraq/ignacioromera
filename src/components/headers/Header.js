import React, { useState } from "react";

import { Link } from "react-router-dom";

import classes from "./Header.module.css";

import { URL } from "../../constants";

const MenuHeader = (props) => {
  const url = URL;
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const normal = classes.menu;
  const active = classes["menu-active"];

  return (
    <React.Fragment>
      <nav className={classes.navbar}>
        <Link className={classes.link1} to={`${url}`}>
          <h4 className={classes.inaxio}>IGNACIO ROMERA</h4>
        </Link>
        <div className={classes["menu-icon"]} onClick={handleClick}>
          <i
            className={
              click ? "fa-sharp fa-solid fa-xmark" : "fa-sharp fa-solid fa-bars"
            }
          />
        </div>
        <ul className={click ? active : normal}>
          <li className={classes.item}>
            <Link className={classes.link} to={`${url}/films`}>
              Films
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to={`${url}/photo`}>
              Photo
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to={`${url}/color`}>
              Color
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to={`${url}/about`}>
              About
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to={`${url}/contact`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default MenuHeader;
