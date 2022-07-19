import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import LandingPage from "../Main/LandingPage/LandingPage";
import SearchBox from "../../Components/SearchField/SearchBox";
import Logout from "../../Components/Logout/Logout";

const Main = (props) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <SearchBox Show={showSearchBox} SetShowSearchBox={setShowSearchBox}/>
      <Logout ShowLogoutBox={showLogoutBox} Logout={props.Logout} SetShowLogoutBox={setShowLogoutBox}/>
      <Header CurrentUser={props.CurrentUser} SetShowLogoutBox={setShowLogoutBox}/>
      {/* <p><Link to="/home">Home</Link></p>
			<p><Link to="/about-us">About Us</Link></p>
			<p><Link to="/faq">FAQ</Link></p>
			<p><Link to={`/vendor/${id}`}>Vendor</Link></p> */}
      {pathname === "/" && <LandingPage setShowSearchBox={setShowSearchBox} showSearchBox={showSearchBox}/>}
      {pathname !== "/" && <Outlet />}
      <Footer />
    </motion.div>
  );
};

export default Main;
