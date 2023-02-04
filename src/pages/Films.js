import React from "react";

import MainHeader from "../components/headers/MainHeader";
import MenuHeader from "../components/headers/MenuHeader";
import Project from "../components/Project";
import Footer from "../components/Footer";

import classes from "./Films.module.css";

import tormento from "../assets/videos/tormento.webp";
import espiral from "../assets/videos/espiral.webp";
import tomboy from "../assets/videos/tomboy.webp";
import sistema from "../assets/videos/sistema.webp";

const Films = () => {
  const menu = [
    {
      id: "01",
      number: "01",
      name: "videoclip for MDA",
      image: tormento,
    },
    {
      id: "02",
      number: "02",
      name: "shortfilm MI SISTEMA",
      image: sistema,
    },
    {
      id: "03",
      number: "03",
      name: "videoclip TOMBOY",
      image: tomboy,
    },
    {
      id: "04",
      number: "04",
      name: "teaser ESPIRAL",
      image: espiral,
    },
  ];
  return (
    <React.Fragment>
      <MainHeader />
      <MenuHeader />
      <div className={classes.films}>
        <h1>Films</h1>
        <ul className={classes.ul}>
          <li className={classes.project}>
            {menu.map((obj) => (
              <Project
                key={obj.id}
                number={obj.number}
                name={obj.name}
                image={obj.image}
              />
            ))}
          </li>
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  );
};

// App
export default Films;
