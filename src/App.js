import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Films from "./pages/Films";
import Photos from "./pages/Photos";
import Colors from "./pages/Colors";

function App() {
  const navigate = useNavigate();
  const openMenuHandler = () => {
    navigate("/films");
  };

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/ignacioromera"
          element={<LandingPage onClick={openMenuHandler} />}
        />
        <Route path="/ignacioromera/films" element={<Films />} />
        <Route path="/ignacioromera/photo" element={<Photos />} />
        <Route path="/ignacioromera/color" element={<Colors />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
