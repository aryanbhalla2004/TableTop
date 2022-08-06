import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {firebase} from "../../../util/Firebase";
import { useTimer } from "../../../util/useTimer";

const EmailActivation = (props) => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(60);    
  const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
  

  useEffect(() => {
    setTimeout( () => {
      checkProvider();
      emailVerified();
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const emailVerified = () => {
    setError("");
    setMessage("");

    let user = firebase.auth().currentUser;
    if(!user.emailVerified) {
      user.sendEmailVerification()
      .then((res) => {
        setMessage(`Verification email sent to ${props.CurrentUser.email}`); 
      })
      .catch((err) => {
        setError(err.message);
      });
    } else {
      setError("This account has been already verified.");
    }
    
  }

  const resetTimer = function () {
    if (!timer) {
      setTimer(60);
      emailVerified();
    }
  };

  const emailProvider = (props.CurrentUser.email).split("@")[1];
  const [validProvider, setValidProvider] = useState(false);
  const [providerLink, setProviderLink] = useState("");

  const checkProvider = () => {
    switch (emailProvider.toLowerCase()) {
      case "gmail.com":
        setValidProvider(true);
        setProviderLink("https://gmail.com");
        break;
      case "yahoo.com":
        setValidProvider(true);
        setProviderLink("https://mail.yahoo.com");
        break;
      case "hotmail.com":
        setValidProvider(true);
        setProviderLink("https://hotmail.com");
        break;
      case "outlook.com":
        setValidProvider(true);
        setProviderLink("https://outlook.com");
        break;
      default:
        setValidProvider(false);
        //! put link when support page is ready 
        setProviderLink("");
        break;
    }
  }
  
  return (
    <>
    {!loading &&
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">Verify Your Email</h3>
      <p class="text-muted mb-3">You will need to verify your email to complete registration</p>
      {message && <div class="alert alert-success mt-2" role="alert">{message}</div>}
      {error && <div class="alert alert-danger mt-0" role="alert">{error}</div>}
      <img src='https://img.freepik.com/free-vector/email-messaging-email-marketing-campaign_183665-8.jpg?w=2000' width="300"></img>
      <p class="text-muted mb-4">An Email has been send to <a><b>{props.CurrentUser.email}</b></a> with a link to verify your account. If you have not received the email after a few minutes. please check your spam folder</p>
      <div class="d-flex justify-content-between">
        <button class="btn btn-primary general-btn height-10px" disabled={timer !== 0} onClick={resetTimer} >Resend Email {timer > 0 && <>(00:{timer})</>}</button>
        <button class="btn btn-primary ghost-btn general-btn height-10px" onClick={() => window.open(providerLink, '_blank', 'noopener,noreferrer')}>{validProvider ? "Go To Email" : "Contact Support"}</button>
      </div>
      <p className="text-2 text-dark mt-3">Activate email later? <Link className="fw-500" to="/">Go Back</Link></p>
    </motion.div>}

    {loading && <div className='loading-Screen-Container'>
      <div id="loading">
        
      </div>
      <p>Please wait while we generate an activation email!</p>
    </div>}
    </> 
  )
}

export default EmailActivation;