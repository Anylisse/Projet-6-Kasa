import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Logements from "./pages/Logements";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Logements />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/error404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;