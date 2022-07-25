import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Login = (props) => {
  const [loginMessage, setLoginMessage] = useOutletContext();
  const [message, setMessage] = useState('');
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
          let userDetails = await props.Login(userInput.email, userInput.password);
          console.log("found user");
          if (userDetails.user.emailVerified) {
            history("/");
          } else {
            history("/auth/email-activation");
          }
        } catch (e) {
          setLoading(false);
          setMessage(e.message);
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

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
      </form>
    </motion.div>
  )
}

export default Login;

