import React from "react";
import { Route, Routes } from "react-router-dom";
import { Applied } from "../Applied";
import { GoogleJobsInfo } from "../GoogleJobsInfo";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GoogleJobsInfo />} />
      <Route path="/applied" element={<Applied />} />
    </Routes>
  );
};
