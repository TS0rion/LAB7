import React from "react";
import CarSelection from "../components/CarSelection";

export default function AppRouter() {
  return (
    <Router  >
      <Route path="/car-selection" element={CarSelection} />
    </Router>
  );
}
