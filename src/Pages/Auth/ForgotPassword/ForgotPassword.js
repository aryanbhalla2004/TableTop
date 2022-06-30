import {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ForgotPassword = (props) => {
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
    setError({email: '', all: ''});
    setMessage('');
    e.preventDefault();
    if(userInput.email !== "") {
      try {
        await props.ForgotPassword(userInput.email);
        setMessage(`Please Check the inbox of ${userInput.email} for password reset link. More further instruction will be included in the email.`);
      } catch(e) {
        setError({all: e.message});
      }
    } else {
      setError({email: 'Email field is empty'})
    }
  }
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">Forgot password?</h3>
      <p class="text-muted mb-4">Enter the email address or mobile number associated with your account.</p>
      {message && <div class="alert alert-success mt-0" role="alert">{message}</div>}
      {error.email && <div class="alert alert-danger mt-0" role="alert">{error.email}</div>}
      {error.all && <div class="alert alert-danger mt-0" role="alert">{error.all}</div>}
      <form onSubmit={onSubmitForm}>
        <div class="mb-3">
          <label for="emailAddress" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="emailAddress" name="email" required="" onChange={updateUserInput} placeholder="Enter Your Email" />
        </div>
        <div class="d-grid my-4">
          <button class="btn btn-primary full-width height-10px" type="submit">Send Email</button>
        </div>
        <p class="text-2 text-dark">Return to <Link class="fw-500" to="/auth/login">Login</Link></p>
      </form>
    </motion.div>
  )
}

export default ForgotPassword