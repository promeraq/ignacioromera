import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Films from "./pages/Films";
import Photos from "./pages/Photos";
import Colors from "./pages/Colors";
import { URL } from "./constants";

function App() {
  const url = URL;
  const navigate = useNavigate();
  const openMenuHandler = () => {
    navigate(`${url}/films`);
  };

  return (
    <React.Fragment>
      <Routes>
        <Route
          path={`${url}`}
          element={<LandingPage onClick={openMenuHandler} />}
        />
        <Route path={`${url}/films`} element={<Films />} />
        <Route path={`${url}/photo`} element={<Photos />} />
        <Route path={`${url}/colors`} element={<Colors />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
