import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideBarMenu } from "./components/SideBarMenu/SideBarMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Landing Page</div>} />=
        <Route path="/dashboard" element={<SideBarMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
