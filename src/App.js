import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Films from "./pages/Films";
import Photos from "./pages/Photos";
import Colors from "./pages/Colors";
import Illustrations from "./pages/Illustrations";
import About from "./pages/About";
import Contact from "./pages/Contact";
/* import { URL } from "./constants"; */

function App() {
  /*   const url = URL; */
  const navigate = useNavigate();
  const openMenuHandler = () => {
    navigate(`/films`);
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage onClick={openMenuHandler} />} />
        <Route path={`/films`} element={<Films />} />
        <Route path={`/photo`} element={<Photos />} />
        <Route path={`/color`} element={<Colors />} />
        <Route path={`/illustrations`} element={<Illustrations />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/contact`} element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
