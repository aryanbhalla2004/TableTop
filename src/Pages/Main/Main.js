import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import LandingPage from "../Main/LandingPage/LandingPage";
import SearchBox from "../../Components/SearchField/SearchBox";
import Logout from "../../Components/Logout/Logout";
import AccountSelect from "../../Components/AccountSelect/AccountSelect";

const Main = (props) => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showAccountSelection, setShowAccountSelection] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <SearchBox Show={showSearchBox} SetShowSearchBox={setShowSearchBox}/>
      <AccountSelect SetShowAccountSelection={setShowAccountSelection} ShowAccountSelection={showAccountSelection}/>
      <Logout ShowLogoutBox={showLogoutBox} Logout={props.Logout} SetShowLogoutBox={setShowLogoutBox}/>
      <Header CurrentUser={props.CurrentUser} SetShowLogoutBox={setShowLogoutBox} SetShowAccountSelection={setShowAccountSelection}/>
      {pathname === "/" && <LandingPage setShowSearchBox={setShowSearchBox} showSearchBox={showSearchBox} Category={props.Category}/>}
      {pathname !== "/" && <Outlet />}
      <Footer />
    </motion.div>
  );
};

export default Main;
