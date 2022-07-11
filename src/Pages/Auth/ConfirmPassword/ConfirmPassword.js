import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useOutletContext} from 'react-router-dom';
import { motion } from "framer-motion";
import PasswordStrengthBar from 'react-password-strength-bar';
import {auth} from '../../../util/Firebase';
const ConfirmPassword = (props) => {
  const [loginMessage, setLoginMessage] = useOutletContext();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  const history = useNavigate();
  const [score, setScore] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    verifyCode();
  }, []);

  const verifyCode = async () => {
    try {
      const codeTest = await auth.checkActionCode(code);
      setUserInfo(codeTest);
      setMessage(`true`);
    } catch(e) {
      setError(e.message);
    }
  }

  
  const [fieldError, setFieldError] = useState({
    confirmPassword: false,
    password: false,
    error: ""
  });

  const [userInput, setUserInput] = useState({
    confirmPassword: '',
    password: '',
  });

  const updateUserInput = (e) => {

    setFieldError(prevInput => ({
      ...prevInput, [e.target.name]: false
    }));

    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if(userInput.password != "") {
      if(score > 2) {
        if(userInput.confirmPassword != "") {
          if(userInput.confirmPassword === userInput.password) {
            try {
              await props.ConfirmPassword(code, userInput.password);
              setLoginMessage('Password was successfully reset, Login in your account and enjoy!');
              history('/auth');
            } catch(e) {
              setMessage('')
              setError(e.message);
            }
          } else {
            setLoading(false);

            setFieldError(prevInput => ({
              ...prevInput, confirmPassword: true
            }));
            
    
            setFieldError(prevInput => ({
              ...prevInput, confirmPassword: "Password doesn't match"
            }));
          }
        } else {
          setLoading(false);

          setFieldError(prevInput => ({
            ...prevInput, confirmPassword: true
          }));
          
  
          setFieldError(prevInput => ({
            ...prevInput, confirmPassword: "Confirm Password field is empty"
          }));
        }
      } else {
          setLoading(false);

          setFieldError(prevInput => ({
            ...prevInput, password: true
          }));

          setFieldError(prevInput => ({
            ...prevInput, error: "Password is weak"
          }));
        }
    } else {
      setLoading(false);
      
        setFieldError(prevInput => ({
          ...prevInput, password: true
        }));
        

        setFieldError(prevInput => ({
          ...prevInput, error: "Password field is empty"
        }));
    }
    
  }

  const changeScore = (score) => {
    setScore(score);
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">Create New Password</h3>
      <p className="text-muted mb-4">Enter the email address or mobile number associated with your account.</p>
      {message && <div className="alert alert-success mt-0" role="alert">Password reset was confirmed for {userInfo.data.email}, Please enter the new password for you account and proceed.</div>}
      {error && <div className="alert alert-danger mt-0" role="alert">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="Password" className="form-label">New Password</label>
          <input type="password" className={fieldError.password ? 'form-control is-invalid' : 'form-control'} value={userInput.password} name="password" onChange={updateUserInput} id="Password" required="" placeholder="Enter New Password" />
          {fieldError.password && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">{fieldError.error}</div>}
          </div>
        <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Your password must be 8-20 characters long.</small>
        <PasswordStrengthBar password={userInput.password} onChangeScore={changeScore}/>
        <div className="mb-3">
          <label for="rePassword" className="form-label">Verify New Password</label>
          <input type="password" className={fieldError.confirmPassword ? 'form-control is-invalid' : 'form-control'} value={userInput.confirmPassword} name="confirmPassword" onChange={updateUserInput} id="rePassword" required="" placeholder="Confirm New Password" />
          {fieldError.confirmPassword && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">{fieldError.error}</div>}
        </div>
        <div className="d-grid my-4">
          <button className="btn btn-primary full-width height-10px" type="submit" disabled={error ? true : false || loading ? true : false}>
            { 
              loading ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> : "Continue"
            }
          </button>
       </div>
        <p className="text-2 text-dark">Return to <Link className="fw-500" to="/auth">Login</Link></p>
      </form>
    </motion.div>
  )
}

export default ConfirmPassword;