import {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ForgotPassword = (props) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    email: '',
    all: ''
  });

  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
  });

  const updateUserInput = (e) => {
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmitForm = async (e) => {
    setLoading(true);
    setError({email: '', all: ''});
    setMessage('');
    e.preventDefault();
    if(userInput.email !== "") {
      try {
        await props.ForgotPassword(userInput.email);
        setLoading(false);
        setMessage(`Please Check the inbox of ${userInput.email} for password reset link. More further instruction will be included in the email.`);
      } catch(e) {
        setLoading(false);
        setError({all: e.message});
      }
    } else {
      setLoading(false);
      setError({email: 'Email field is empty'})
    }
  }
  
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">Forgot password?</h3>
      <p className="text-muted mb-4">Enter the email address or mobile number associated with your account.</p>
      {message && <div className="alert alert-success mt-0" role="alert">{message}</div>}
      {error.email && <div className="alert alert-danger mt-0" role="alert">{error.email}</div>}
      {error.all && <div className="alert alert-danger mt-0" role="alert">{error.all}</div>}
      <form onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label for="emailAddress" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="emailAddress" name="email" required="" onChange={updateUserInput} placeholder="Enter Your Email" />
        </div>
        <div className="d-grid my-4">
          <button className="btn btn-primary full-width height-10px" type="submit" disabled={loading ? true : false}>
            { 
              loading ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> : "Send Email"
            }
          </button>
        </div>
        <p className="text-2 text-dark">Return to <Link className="fw-500" to="/auth">Login</Link></p>
      </form>
    </motion.div>
  )
}

export default ForgotPassword