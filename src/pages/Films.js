import React from "react";

import Header from "../components/headers/Header";
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
      video_id: "https://youtube.com/embed/7PV5IfUacRo",
    },
    {
      id: "02",
      number: "02",
      name: "shortfilm MI SISTEMA",
      image: sistema,
      video_id: "https://youtube.com/embed/uNGWPz_o-S4",
    },
    {
      id: "03",
      number: "03",
      name: "videoclip TOMBOY",
      image: tomboy,
      video_id: "https://player.vimeo.com/video/664868212",
    },
    {
      id: "04",
      number: "04",
      name: "teaser ESPIRAL",
      image: espiral,
      video_id: "https://player.vimeo.com/video/664884062",
    },
  ];

  return (
    <React.Fragment>
      <meta
        name="viewport"
        content="width=device-width,
                       initial-scale=1"
      />
      <Header />

      <div className={classes.films}>
        <h1 className={classes.title}>Films</h1>
        <div className={classes.container}>
          <ul className={classes["films-ul"]}>
            <li className={classes["films-li"]}>
              {menu.map((obj) => (
                <Project
                  key={obj.id}
                  number={obj.number}
                  name={obj.name}
                  image={obj.image}
                  video_id={obj.video_id}
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

// App
export default Films;
