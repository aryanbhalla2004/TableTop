import React, {useState, useCallback, useEffect} from 'react'
import { motion } from "framer-motion";
import {auth, firebase} from "../../../util/Firebase";
import { RecaptchaVerifier } from 'firebase/auth';
import "firebase/auth";
import AuthCode from 'react-auth-code-input';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from 'react-router-dom';

const MutliFactor = (props) => {
  const history = useNavigate();
  const [messageSent, setMessageSent] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [resendError, setResendError] = useState(false);
  const [reauth, setReauth] = useState(false);
  const [timer, setTimer] = useState(60);   
  const [recaptcha, setRecaptcha]  = useState(); 
  const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
  const handleOnChange = (res) => {
    setResult(res);
  };

  useEffect(() => {
    const verifiers = new firebase.auth.RecaptchaVerifier('2fa-captcha-a', {
      size: 'invisible',
      callback: function (response) {
        console.log('captcha solved!');
      },
    })

    if (!recaptcha) {
        verifiers.verify().then(() => setRecaptcha(verifiers));
    }

    return () => {
      verifiers.clear()
    }
  }, []);

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const retryCode = async () => {
    const phoneNumber = "+" + userPhone;
    const user = auth.currentUser;
    const session = await user.multiFactor.getSession();
    const phoneOpts = {phoneNumber,session};
    const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
  

    try {
      window.verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneOpts, recaptcha)
      setMessage("Verification code was sent AGAIN successfully");
      setMessageSent(true);
    } catch (e) {
      if(e.code === "auth/requires-recent-login") {
        setReauth(true);
      } else {
        setErrorMessage(e.message);
      } 
    }
  }


  const sendCode = async (e) => {
    e.preventDefault();    
    setResendError(false);
    setReauth(false);
    setError(false);
    setErrorMessage("");
    setLoading(true);
      
    if(userPhone != "" && userPhone.length >= 10) {
      const phoneNumber = "+" + userPhone;
      const user = auth.currentUser;
      const session = await user.multiFactor.getSession();
      const phoneOpts = {phoneNumber,session};
      const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
    

      try {
        window.verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneOpts, recaptcha)
        setMessage("Verification code was sent successfully");
        setMessageSent(true);
      } catch (e) {
        if(e.code === "auth/requires-recent-login") {
          setReauth(true);
        } else {
          setErrorMessage(e.message);
        } 
      }
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
      
    }
    
  }

  const confirmCode = async (e) => {
    setResendError(false);
    setMessage("");
    setErrorMessage("");
    e.preventDefault();
    if(result !== undefined && result.length === 6) {
      setError(false);
      const cred = firebase.auth.PhoneAuthProvider.credential(window.verificationId, result);
      const multiFactorAssertion = firebase.auth.PhoneMultiFactorGenerator.assertion(cred);
      const user = auth.currentUser;
      try {
        await user.multiFactor.enroll(multiFactorAssertion, 'phone number');
        history('/');
      } catch(e) {
        if(e.code === "auth/code-expired") {
          setResendError(true);
        } else if (e.code === 'auth/invalid-verification-code')  {
          setErrorMessage("The SMS verification code used to create the phone auth credential is invalid. Please try again with a valid code.");
        } else {
          setErrorMessage(e.message);
          
        }
        
      }
    } else {
      setError(true);
    }
  }

  const resetTimer = function () {
    if (!timer) {
      setTimer(60);
      retryCode();
    }
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div id="2fa-captcha-a" class="justify-center flex"></div>   
      {!messageSent && <>
      <h3 class="title-auth">2. Validation Phone Number</h3>
      <p class="text-muted mb-4">This is a critical step in the account closing procedure. When an user attempts to login, they will receive a temporary password on the phone number listed below.</p>
      {errorMessage && <div className="alert alert-danger mt-0" role="alert">{errorMessage}</div>}
      {message && <div className="alert alert-success mt-0" role="alert">{message}</div>}
      {reauth && <div className="alert alert-danger mt-0" role="alert">This operation is sensitive and requires recent authentication. <Link to="/logout/phone2valid2account2redirect">Click Here</Link> to try again. After clicking on this link you will be redirected to the login form.</div>}
      <form onSubmit={sendCode}>
        <div class="mb-3 rm-padding-left">
          <label for="emailAddress" class="form-label">Phone Number</label>
          <PhoneInput country={'ca'} value={userPhone} onChange={phone => setUserPhone(phone)} autoFormat enableSearch searchClass="form-control" inputClass="form-control" buttonClass="" priority={{ca: 1, us: 1, kz: 0, ru: 1}}/>
          {error && <div id="validationServer03Feedback" class="invalid-error-message mt-0 mb-0">Please provide a valid phone number.</div>}
        </div>
        <button class="btn btn-primary full-width height-10px" type="submit" disabled={loading ? true : false}>
            {  
              loading ? 
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div> : "Send Verification Code"
            }
          </button>
        
        {/* <div class="card-selection" onClick={() => onAccountSection('Vendor')}>
          <span class="mx-3"><i class="bi bi-building"></i> Vendor/Business Account</span>
          <i class="bi bi-chevron-right"></i> 
        </div>
        <div class="card-selection mt-3" onClick={() => onAccountSection('Regular')}>
          <span class="mx-3"><i class="bi bi-person"></i> Regular Account</span>
          <i class="bi bi-chevron-right"></i>
        </div> */}
       
      </form>
      </>}

      {messageSent && <>
      <h3 class="title-auth">2. Validation Phone Number</h3>
      <p class="text-muted mb-3">Please type the 6-digit code that you received on your phone number {userPhone}.</p>
      {errorMessage && <div className="alert alert-danger mt-0" role="alert">{errorMessage}</div>}
      {message && <div className="alert alert-success" role="alert">{message}</div>}
      {resendError && <div className="alert alert-danger mt-0" role="alert">The SMS code has expired. Please <a onClick={retryCode}>Click here</a> to re-send the verification code to try again. </div>}
      <form onSubmit={confirmCode}>
        <AuthCode onChange={handleOnChange} containerClassName="grid-item-code-holder" inputClassName="form-control"/>
        {error && <div id="validationServer03Feedback" class="invalid-error-message mt-0 mb-0">Please provide a valid 6-digit code.</div>}
        <button class="btn btn-primary full-width height-10px mt-4" type="submit" disabled={loading ? true : false}>
            { 
              loading ? 
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div> : "Verify"
            }
          </button>
        
        {/* <div class="card-selection" onClick={() => onAccountSection('Vendor')}>
          <span class="mx-3"><i class="bi bi-building"></i> Vendor/Business Account</span>
          <i class="bi bi-chevron-right"></i> 
        </div>
        <div class="card-selection mt-3" onClick={() => onAccountSection('Regular')}>
          <span class="mx-3"><i class="bi bi-person"></i> Regular Account</span>
          <i class="bi bi-chevron-right"></i>
        </div> */}
        <p className="text-2 text-dark mt-3">Not received your code? <button disabled={timer !== 0} className="text-button" onClick={resetTimer} >Resend code {timer > 0 && <>(00:{timer})</>}</button></p>
      </form>
      </>}
    </ motion.div>
  )
}

export default MutliFactor;
