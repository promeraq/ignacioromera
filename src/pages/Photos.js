import React from "react";

import MainHeader from "../components/headers/MainHeader";
import PhotoItem from "../components/PhotoItem";
import Footer from "../components/Footer";

import classes from "./Photos.module.css";

import espiral1 from "../assets/photos/espiral1.webp";
import espiral2 from "../assets/photos/espiral2.webp";
import espiral3 from "../assets/photos/espiral3.webp";
import espiral4 from "../assets/photos/espiral4.webp";
import royo1 from "../assets/photos/royo1.webp";
import royo2 from "../assets/photos/royo2.webp";
import royo3 from "../assets/photos/royo3.webp";
import rusa1 from "../assets/photos/rusa1.webp";
import rusa2 from "../assets/photos/rusa2.webp";
import ciudad1 from "../assets/photos/ciudad1.webp";
import ciudad2 from "../assets/photos/ciudad2.webp";
import ciudad3 from "../assets/photos/ciudad3.webp";
import ciudad4 from "../assets/photos/ciudad4.webp";
import ciudad5 from "../assets/photos/ciudad5.webp";
import ciudad6 from "../assets/photos/ciudad6.webp";
import random1 from "../assets/photos/random1.webp";
import random2 from "../assets/photos/random2.webp";
import rastro1 from "../assets/photos/rastro1.webp";
import rastro2 from "../assets/photos/rastro2.webp";
import rastro3 from "../assets/photos/rastro3.webp";
import MenuHeader from "../components/headers/MenuHeader";

const Photos = () => {
  const menu = [
    {
      id: "011",
      number: "011",
      name: "ESPIRAL",
      image: espiral1,
    },
    {
      id: "012",
      number: "012",
      name: "ESPIRAL",
      image: espiral2,
    },
    {
      id: "013",
      number: "013",
      name: "ESPIRAL",
      image: espiral3,
    },
    {
      id: "014",
      number: "014",
      name: "ESPIRAL",
      image: espiral4,
    },
    {
      id: "021",
      number: "021",
      name: "EL ROYO",
      image: royo1,
    },
    {
      id: "022",
      number: "022",
      name: "EL ROYO",
      image: royo2,
    },
    {
      id: "023",
      number: "023",
      name: "EL ROYO",
      image: royo3,
    },
    {
      id: "031",
      number: "031",
      name: "RUSA",
      image: rusa1,
    },
    {
      id: "032",
      number: "032",
      name: "RUSA",
      image: rusa2,
    },
    {
      id: "041",
      number: "041",
      name: "EL RASTRO",
      image: rastro1,
    },
    {
      id: "042",
      number: "042",
      name: "EL RASTRO",
      image: rastro2,
    },
    {
      id: "043",
      number: "043",
      name: "EL RASTRO",
      image: rastro3,
    },
    {
      id: "051",
      number: "051",
      name: "MADRID",
      image: ciudad1,
    },
    {
      id: "052",
      number: "052",
      name: "MADRID",
      image: ciudad2,
    },
    {
      id: "053",
      number: "053",
      name: "MADRID",
      image: ciudad3,
    },
    {
      id: "054",
      number: "054",
      name: "MADRID",
      image: ciudad4,
    },
    {
      id: "055",
      number: "045",
      name: "MADRID",
      image: ciudad5,
    },
    {
      id: "056",
      number: "056",
      name: "MADRID",
      image: ciudad6,
    },
    {
      id: "061",
      number: "061",
      name: "NATURE",
      image: random1,
    },
    {
      id: "062",
      number: "062",
      name: "NATURE",
      image: random2,
    },
  ];
  return (
    <React.Fragment>
      <MainHeader />
      <MenuHeader />
      <div className={classes.photos}>
        <h1>Photography</h1>
        <ul className={classes.ul}>
          <li className={classes.project}>
            {menu.map((obj) => (
              <PhotoItem
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
export default Photos;
