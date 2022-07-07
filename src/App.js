import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideBarMenu } from "./components/SideBarMenu/SideBarMenu";
import { TopNavbar } from "./components/TopNavbar/TopNavbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Landing Page</div>} />
        <Route
          path="/dashboard"
          element={
            <>
              <SideBarMenu />
              <TopNavbar />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
