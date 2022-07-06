import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Landing Page</div>} />=
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
