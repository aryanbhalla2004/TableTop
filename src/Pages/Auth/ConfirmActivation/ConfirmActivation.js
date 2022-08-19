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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      getMeActivated();
    }, 4000);
    
  }, []);

  const getMeActivated = async () => {
    setError("");
    setMessage("");
    if(code !== null || code !== undefined) {
      try {
        let info = await props.ConfirmActivation(code);
        setMessage("Your account has been completely activated and is now fully functional. We hope you have a pleasant visit at table top.");
      } catch (e) {
        console.log("error has ran");
        setError(e.message);
      }
    } else {
      history.push('/user/activate-account')
    }
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      {!loading && <>
      <h3 className="title-auth">Your email address has been validated.</h3>
      <p className="text-muted">Your account has been successfully verified you next step would be to enable 2FA</p>
      <div className='d-flex justify-content-center height-10px'>
        <svg className="checkmark" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
      </div>
      <p className="text-muted mb-4">An Email has been send to <b>aryanbhalla66@gmail.com</b> with a link to verify your account. If you have not received the email after a few minutes. please check your spam folder</p>

      {message && <div className="alert alert-success mt-2" role="alert">{message}</div>}
      {error && <div className="alert alert-danger mt-2" role="alert">{error}</div>}
      {!error && <button className="btn btn-primary full-width height-10px mb-3" type="button" onClick={() => history('/auth/multi-factor-setup')}>Continue</button>}
      {error && <button className='btn btn-primary full-width height-10px mb-3' type="button" onClick={() => window.close()}>Close</button> }
      <p className="text-2 text-dark">Return to <Link className="fw-500" to="/">Home</Link></p> </>}
      
      {loading && <div className='loading-Screen-Container'>
      <div id="loading">
        
      </div>
      <p>Please wait while we activate your account!</p>
    </div>}
    </motion.div>
  )
}

export default ConfirmActivation;