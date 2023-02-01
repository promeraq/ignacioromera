import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Films from "./pages/Films";
import Photos from "./pages/Photos";

function App() {
  const navigate = useNavigate();
  const openMenuHandler = () => {
    navigate("/films");
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage onClick={openMenuHandler} />} />
        <Route path="/films" element={<Films />} />
        {/*         <Route path="/photo" element={<Photos />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
