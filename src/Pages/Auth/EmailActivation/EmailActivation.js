import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
const EmailActivation = (props) => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    emailVerified();
  }, [])

  const emailVerified = async (param) => {
    setLoading(true);
    try {
      await props.EmailActivation();
      if(param != "resend") {
        setMessage(`Resend Verification email sent to ${props.CurrentUser.email}`); 
      } else {
        setMessage(`Verification email sent to ${props.CurrentUser.email}`); 
      }
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  
  return (
    <>
    {!loading ?
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">Verify Your Email</h3>
      <p class="text-muted">You will need to verify your email to complete registration</p>
      {message && <div class="alert alert-success mt-0" role="alert">{message}</div>}
      {error && <div class="alert alert-danger mt-0" role="alert">{error}</div>}
      <img src='https://img.freepik.com/free-vector/email-messaging-email-marketing-campaign_183665-8.jpg?w=2000' width="400"></img>
      <p class="text-muted mb-4">An Email has been send to <a><b>{props.CurrentUser.email}</b></a> with a link to verify your account. If you have not received the email after a few minutes. please check your spam folder</p>
      <div class="d-flex justify-content-between">
          <button class="btn btn-primary general-btn height-10px" onClick={() => emailVerified("resend")}>Resend Email</button>
          <button class="btn btn-primary ghost-btn general-btn height-10px" type="submit">Contact Support</button>
      </div>
    </motion.div> : <h1>Loading</h1> }
    </> 
  )
}

export default EmailActivation;