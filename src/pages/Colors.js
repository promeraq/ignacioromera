import React from "react";

import Header from "../components/headers/Header";
import ColorItem from "../components/ColorItem";
import Footer from "../components/Footer";

import classes from "./Colors.module.css";

import espiral_c1 from "../assets/colors/espiral_c1.webp";
import espiral_c2 from "../assets/colors/espiral_c2.webp";
import tormento_c1 from "../assets/colors/tormento_c1.webp";
import tormento_c2 from "../assets/colors/tormento_c2.webp";
import sistema_c1 from "../assets/colors/sistema_c1.webp";
import sistema_c2 from "../assets/colors/sistema_c2.webp";
import sistema_c3 from "../assets/colors/sistema_c3.webp";
import sistema_c4 from "../assets/colors/sistema_c4.webp";

const Colors = () => {
  const menu = [
    {
      id: "011",
      number: "011",
      name: "teaser ESPIRAL",
      image: espiral_c1,
    },
    {
      id: "012",
      number: "012",
      name: "teaser ESPIRAL",
      image: espiral_c2,
    },
    {
      id: "021",
      number: "021",
      name: "videoclip TORMENTO",
      image: tormento_c1,
    },
    {
      id: "022",
      number: "022",
      name: "videoclip TORMENTO",
      image: tormento_c2,
    },
    {
      id: "031",
      number: "031",
      name: "shortfilm MI SISTEMA",
      image: sistema_c1,
    },
    {
      id: "032",
      number: "032",
      name: "shortfilm MI SISTEMA",
      image: sistema_c2,
    },
    {
      id: "033",
      number: "033",
      name: "shortfilm MI SISTEMA",
      image: sistema_c3,
    },
    {
      id: "034",
      number: "034",
      name: "shortfilm MI SISTEMA",
      image: sistema_c4,
    },
  ];
  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Header />
      <div className={classes.colors}>
        <h1 className={classes.titlecolors}>Color</h1>
        <div className={classes.container}>
          <ul className={classes.ul}>
            <li className={classes.project}>
              {menu.map((obj) => (
                <ColorItem
                  key={obj.id}
                  number={obj.number}
                  name={obj.name}
                  image={obj.image}
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
export default Colors;
