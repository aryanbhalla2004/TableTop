import React from 'react'
import { Link } from 'react-router-dom';

export const BusinessFormSent = () => {
  return (
    <form className="form-container" id="form-location">
      <div className='sent-confirmation'>
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        <h4>Information sent successfully</h4>
        <p>When we have completed examining your information, a member of our staff will get in touch with you. Please check email inbox daily you should be reviving a conformation about your account.</p>
        <div>
          <Link to="/">Go Home</Link>
          <Link className='ghost-button-home' to="/faq">What Next?</Link>
        </div>
      </div>
    </form>
  )
}

export default BusinessFormSent;