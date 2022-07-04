import React from "react";
import { Route, Routes } from "react-router-dom";
import { Add } from "../Cities/Add";
import { Cities } from "../Cities/Cities";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cities />} />
        <Route path="/add-country-city" element={<Add />} />
      </Routes>
    </div>
  );
};
