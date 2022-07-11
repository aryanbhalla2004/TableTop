import React from 'react'
import Header from "../../../Components/Header/Header";
import Footer from '../../../Components/Footer/Footer';
import {Link, Outlet} from "react-router-dom";
import { motion } from "framer-motion";
const Main = (props) => {
  const id = 2;

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header CurrentUser={props.CurrentUser} Logout={props.Logout}/>
      <p><Link to="/home">Home</Link></p>
			<p><Link to="/about-us">About Us</Link></p>
			<p><Link to="/faq">FAQ</Link></p>
			<p><Link to={`/vendor/${id}`}>Vendor</Link></p>
      <Outlet/>
      <Footer/>
    </motion.div>
  )
}

export default Main;