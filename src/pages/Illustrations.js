import React from "react";

import Header from "../components/headers/Header";
import IllusItem from "../components/IllusItem";
import Footer from "../components/Footer";

import classes from "./Illustrations.module.css";

import dogg from "../assets/design/dogg.webp";
import satelite from "../assets/design/satelite.webp";
import mind from "../assets/design/mind.webp";
import tennis1 from "../assets/design/tennis1.webp";
import tennis2 from "../assets/design/tennis2.webp";
import mezquita from "../assets/design/mezquita.webp";
import sistema_portada from "../assets/design/sistema_portada.webp";
import espiral_portada from "../assets/design/espiral_portada.webp";

const Illustrations = () => {
  const illustrations = [
    {
      id: "011",
      number: "011",
      name: "Doggy",
      image: dogg,
    },
    {
      id: "012",
      number: "012",
      name: "Satelite",
      image: satelite,
    },
    {
      id: "013",
      number: "013",
      name: "Mind",
      image: mind,
    },
  ];
  const illus3d = [
    {
      id: "021",
      number: "021",
      name: "Tennis stand",
      image: tennis1,
    },
    {
      id: "022",
      number: "022",
      name: "Tennis stand",
      image: tennis2,
    },
    {
      id: "023",
      number: "023",
      name: "Mosque",
      image: mezquita,
    },
  ];
  const pages = [
    {
      id: "031",
      number: "031",
      name: "Espiral",
      image: espiral_portada,
    },
    {
      id: "032",
      number: "032",
      name: "Mi Sistema",
      image: sistema_portada,
    },
  ];
  return (
    <React.Fragment>
      <Header />
      <div className={classes.photos}>
        <h1 className={classes.title}>Design</h1>
        <h2 className={classes.subtitle}>Illustrations</h2>
        <ul className={classes.ul}>
          <li className={classes.li}>
            {illustrations.map((obj) => (
              <IllusItem
                key={obj.id}
                number={obj.number}
                name={obj.name}
                image={obj.image}
              />
            ))}
          </li>
        </ul>
        <h2 className={classes.subtitle}>3D Max</h2>
        <ul className={classes.ul}>
          <li className={classes.li}>
            {illus3d.map((obj) => (
              <IllusItem
                key={obj.id}
                number={obj.number}
                name={obj.name}
                image={obj.image}
              />
            ))}
          </li>
        </ul>
        <h2 className={classes.subtitle}>Film Front Pages</h2>
        <ul className={classes.ul}>
          <li className={classes.li}>
            {pages.map((obj) => (
              <IllusItem
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
export default Illustrations;
// Header
// PhotoItem
// Footer
