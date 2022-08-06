import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import {firebase, auth} from "../../../util/Firebase";
import { useEffect, useState, useCallback } from "react";
import AuthCode from 'react-auth-code-input';

const Login = (props) => {
  const [codeSent, setCodeSent] = useState(false);
  const [loginMessage, setLoginMessage] = useOutletContext();
  const [message, setMessage] = useState('');
  const [result, setResult] = useState();
  const [timer, setTimer] = useState(60);    
  const [recaptcha, setRecaptcha]  = useState();
  const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  useEffect(() => {
    const verifier = new firebase.auth.RecaptchaVerifier('2fa-captcha', {
      size: 'invisible',
      callback: function (response) {
        console.log('captcha solved!');
      },
    })

    if (!recaptcha) {
        verifier.verify().then(() => setRecaptcha(verifier));
    }

    return () => {
      verifier.clear()
    }
  }, []);

  const resetTimer = function () {
    if (!timer) {
      setTimer(60);
      sendCodeAgain();
    }
  };

  const handleOnChange = (res) => {
    setResult(res);
  };

  const history = useNavigate();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);

  const [fieldError, setFieldError] = useState({
    email: false,
    password: false,
    code: false,
    message: "",
  });

  const updateUserInput = (e) => {
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));

    setFieldError(prevInput => ({
      ...prevInput, [e.target.name]: false
    }));

    setFieldError(prevInput => ({
      ...prevInput, message: ""
    }));
  }

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();    
    if(userInput.email != "" && userInput.password != "") {
      if(userInput.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

        try {
          const user = await auth.signInWithEmailAndPassword(userInput.email, userInput.password);
          if(user.user.multiFactor.enrolledFactors.length === 0) {
            history('/auth/multi-factor-setup');
          }
        } catch (err) {
          console.log(err.code);
          setFieldError(prevInput => ({
            ...prevInput, message: ''
          }));
          if (err.code === 'auth/multi-factor-auth-required') {
            console.log("multi step");
            window.resolver = err.resolver;
            const phoneOpts = {
              multiFactorHint: window.resolver.hints[0],
              session: window.resolver.session,
            };
            console.log(window.window.resolver.hints[0])
            const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
          
            window.verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneOpts, recaptcha);
            setLoginMessage(`A 6-digit OTP code has been sent to you phone number that ends with ${window.window.resolver.hints[0].phoneNumber}`)
            setCodeSent(true);

          } else {
            setFieldError(prevInput => ({
              ...prevInput, message: err.message
            }));
          }
          setLoading(false);
        }
      } else {
        setLoading(false);

        setFieldError(prevInput => ({
          ...prevInput, email: true
        }));

        setFieldError(prevInput => ({
          ...prevInput, message: "Your email appears to be in the wrong format."
        }));
      }
    } else {
      setLoading(false);

      if(userInput.email == "") {
        setFieldError(prevInput => ({
          ...prevInput, email: true
        }));
      } 

      if(userInput.password == "") {
        setFieldError(prevInput => ({
          ...prevInput, password: true
        }));
      }

      setFieldError(prevInput => ({
        ...prevInput, message: "Invalid Email/Password"
      }));
    }
  }

  const verifyCode = async (e) => {
    e.preventDefault();
    setLoginMessage("");
    setFieldError(prevInput => ({
      ...prevInput, message: ""
    }));
    if(result !== undefined && result.length === 6) {
      setFieldError(prevInput => ({
        ...prevInput, code: false
      }));
      const cred = firebase.auth.PhoneAuthProvider.credential(window.verificationId, result);
      const multiFactorAssertion = firebase.auth.PhoneMultiFactorGenerator.assertion(cred);
      try {
        await window.resolver.resolveSignIn(multiFactorAssertion);
      } catch(e) {
        setFieldError(prevInput => ({
          ...prevInput, message: e.message
        }));
      }
    } else {
      setFieldError(prevInput => ({
        ...prevInput, code: true
      }));
    }
  }

  const sendCodeAgain = async () => {
    setFieldError(prevInput => ({
      ...prevInput, message: ""
    }));

    const phoneOpts = {
      multiFactorHint: window.resolver.hints[0],
      session: window.resolver.session,
    };
    const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
    window.verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneOpts, recaptcha);
    setLoginMessage(`A 6-digit OTP code has been sent AGAIN to you phone number that ends with ${window.window.resolver.hints[0].phoneNumber}`)
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div id="2fa-captcha" class="justify-center flex"></div> 
      {!codeSent && <> 
      <h3 className="title-auth">Log In to Your Account</h3>
      <div className="social-login-button">
        <Link to=""><i className="bi bi-google"></i> <span className="mx-3">Log in with Google</span></Link>
        <Link to=""><i className="bi bi-facebook"></i> <span className="mx-3">Log in with Facebook</span></Link>
      </div>
      <div className="divider-line">
        <hr className="small-line" />
        <span className="mx-3 text-2 text-muted">OR</span>
        <hr className="big-line" />
      </div>
      {message && <div className="alert alert-danger mt-0" role="alert">{message}</div>}
      {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>}
      {loginMessage && <div className="alert alert-success mt-0" role="alert">{loginMessage}</div>}
      {props.LoginMessageFromLogout && <div className="alert alert-warning mt-0" role="alert">{props.LoginMessageFromLogout.message}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="emailAddress" className="form-label">Email Address</label>
          <input type="email" className={fieldError.email ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="email" value={userInput.email} onChange={updateUserInput} placeholder="Enter Your Email"/>
         {fieldError.email && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid email.</div>}
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className={fieldError.password ? 'form-control is-invalid' : 'form-control'} id="password" required="" name="password" value={userInput.password} onChange={updateUserInput} placeholder="Enter Password"/>
          {fieldError.password && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid password.</div>}
        </div>
        <div className="item-footer-logo">
          <div className="form-check">
            <input id="remember-me" name="remember" className="form-check-input" type="checkbox"/>
            <label className="form-check-label" for="remember-me">Remember Me</label>
          </div>
          <div className="text-end"><Link to="/auth/forgot-password">Forgot Password ?</Link></div>
        </div>
        <div className="d-grid my-4">
          <button className="btn btn-primary full-width height-10px" type="submit" disabled={loading ? true : false}>
            { 
              loading ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> : "Login"
            }
          </button>
        </div>
        <p className="text-2 text-dark">Not a member? <Link className="fw-500" to="/auth/signup">Register</Link></p>
      </form></>}

      {codeSent && <>
        <h3 className="title-auth">Validate OTP</h3>
        <p class="text-muted mb-2">Please enter the OTP (one time password) to verify your account. This feature will keep you information and account safe.</p>
        {loginMessage && <div className="alert alert-success mt-0" role="alert">{loginMessage}</div>}
        {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>}
        <form onSubmit={verifyCode}>
          <AuthCode onChange={handleOnChange} containerClassName="grid-item-code-holder" inputClassName="form-control" isPassword/>
          {fieldError.code && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid OTP code.</div>}
          <div className="d-grid my-4">
            <button className="btn btn-primary full-width height-10px" type="submit" disabled={loading ? true : false}>
              { 
                loading ? 
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div> : "Verify"
              }
            </button>
          </div>
        </form>
        <p className="text-2 text-dark">Not received your code? <button disabled={timer !== 0} className="text-button" onClick={resetTimer} >Resend code {timer > 0 && <>(00:{timer})</>}</button></p>
      </>
      }
    </motion.div>
  )
}

export default Login;

