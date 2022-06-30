import React from 'react'
import Header from "../../../Components/Header/Header";
import Footer from '../../../Components/Footer/Footer';
import {Outlet} from "react-router-dom";
import { motion } from "framer-motion";
const Main = (props) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header CurrentUser={props.CurrentUser} Logout={props.Logout}/>
      <Outlet/>
      <Footer/>
    </motion.div>
  )
}

export default Main;