import React from "react";
import CarSelection from "../components/CarSelection";
import { Route, Router, Routes } from "react-router-dom";
import Timer from "../components/Timer";
import Clock from "../components/Clock";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CarSelection />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/clock" element={<Clock />} />
    </Routes>
  );
}
