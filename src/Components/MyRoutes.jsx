import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Gallery from "./Gallery";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
    </Routes>
  );
};

export default MyRoutes;
