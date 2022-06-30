import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
const EmailActivation = () => {

  
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">Verify Your Email</h3>
      <p class="text-muted">You will need to verify your email to complete registration</p>
      <img src='https://img.freepik.com/free-vector/email-messaging-email-marketing-campaign_183665-8.jpg?w=2000' width="500"></img>
      <p class="text-muted mb-4">An Email has been send to <a><b>aryanbhalla66@gmail.com</b></a> with a link to verify your account. If you have not received the email after a few minutes. please check your spam folder</p>
      <div class="d-flex justify-content-between">
          <button class="btn btn-primary general-btn height-10px" type="submit">Resend Email</button>
          <button class="btn btn-primary ghost-btn general-btn height-10px" type="submit">Contact Support</button>
      </div>
    </motion.div>
  )
}

export default EmailActivation;