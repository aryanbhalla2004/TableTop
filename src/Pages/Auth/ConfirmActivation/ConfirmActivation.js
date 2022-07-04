import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const ConfirmActivation = (props) => {
  const history = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [verifed, setVerifed] = useState(false);

  useEffect(() => {
    const getMeActivated = async () => {
      if(code !== null || code !== undefined) {
        try {
          let info = await props.ConfirmActivation(code);
          setVerifed(true);
        } catch (e) {
          setError(e.message);
        }
      } else {
        history.push('/user/activate-account')
      }
    }

    getMeActivated();
  }, []);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">Your email address has been verified.</h3>
      <p class="text-muted">You will need to verify your email to complete registration</p>
      {message && <div class="alert alert-success mt-0" role="alert">{message}</div>}
      {error && <div class="alert alert-danger mt-0" role="alert">{error}</div>}
      <div className='d-flex justify-content-center height-10px'>
        <svg class="checkmark" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
      </div>
      <p class="text-muted mb-4">An Email has been send to <b>aryanbhalla66@gmail.com</b> with a link to verify your account. If you have not received the email after a few minutes. please check your spam folder</p>
      <button class="btn btn-primary full-width height-10px mb-3" type="submit">Go to Dashboard </button>
      <p class="text-2 text-dark">Return to <Link class="fw-500" to="/auth/login">Home</Link></p>

    </motion.div>
  )
}

export default ConfirmActivation;