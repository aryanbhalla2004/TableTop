import React, {useState} from 'react'
import { ProgressBar } from 'react-bootstrap';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import BusinessFormStep from './Business/BusinessFormStep';
import "./BusinessForm.css"
import BusinessFormSent from './Complete/BusinessFormSent';
import InformationForm from './Information/InformationForm';
import PreviewForm from './Preview/PreviewForm';
import {firebase} from "../../../util/Firebase";
import BusinessProof from './Proof/BusinessProof';
import { useEffect } from 'react';
import * as IoIcons from "react-icons";

const BusinessForm = (props) => {
  const history = useNavigate();
  
  const [businessSearch, setBusinessSearch] = useState(true);
  const [count, setCount] = useState(0);
  const [businessConflict, setBusinessConflict] = useState(false);
  const [prompt, setPrompt] = useState(false);


  const [filesStatus, setFileStatus] = useState({
    one: false,
    two: false,
  });

  const [error, setError] = useState({
    one: false,
    two: false,
  });

  const [businessForm, setBusinessForm] = useState({
    fName: '',
    lName: '',
    phone: '',
    email: '',
    businessName: '',
    businessNumber: '',
    businessPhone: '',
    businessEmail: '',
    businessAddress: '',
    businessWebsiteLink: '',
    businessType: '',
    businessSize: '',
    businessDescription: '',
    business: {},
    read: false,
    status: 'Pending',
    one: '',
    two: '',
    createdDate: new Date().toLocaleString(),
  });

  const [fieldError, setFieldError] = useState({
    fName: false,
    lName: false,
    phone: false,
    email: false,
    businessName: false,
    businessNumber: false,
    businessPhone: false,
    businessEmail: false,
    businessAddress: false,
    businessWebsiteLink: false,
    businessType: false,
    businessSize: false,
    one: false,
    two: false,
    businessDescription: false,
  });

  const [active, setActive] = useState("one");
  const [completed, setCompleted] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    last: false
  });

  const nextStep = (current, next) => {
    setActive(next);
    setCompleted(prevInput => ({
      ...prevInput, [current]: true
    }));
    window.scrollTo(0, 0);
  }

  const backStep = (prev) => {
    window.scrollTo(0, 0);
    setActive(prev);
    setCompleted(prevInput => ({
      ...prevInput, [prev]: false
    }));
  }

  const updateUserForm = (e) => {
    if(e.target.name !== "businessDescription") {
      setFieldError(prevInput => ({
        ...prevInput, [e.target.name]: false
      }));
      setBusinessForm(prevInput => ({
        ...prevInput, [e.target.name]: e.target.value
      }));
    } else {
      console.log(e.nativeEvent.inputType);
      if(count != 500 || e.nativeEvent.inputType === "deleteContentBackward") {
        setFieldError(prevInput => ({
          ...prevInput, [e.target.name]: false
        }));
        setBusinessForm(prevInput => ({
          ...prevInput, [e.target.name]: e.target.value
        }));
        setCount(businessForm.businessDescription && businessForm.businessDescription.split("").length);
      }
    }
  }

  const onSubmit = async (e) => {
    try {
      await firebase.firestore().collection("BusinessInquires").doc().set(businessForm);
    } catch(e) {
      console.log(e.message);
    }
  }

  const confirmPrompt = () => {
    setBusinessSearch(false);
    setPrompt(false)
  }

  const reselectBusiness = () => {
    setBusinessSearch(true);
    setBusinessConflict(false);
    backStep('two')
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Become a Business Account Member | TableTop</title>
      </Helmet>
      {prompt && 
      <div className='prompt-box-confirm-business'>
        <div className='business-prompt-confirm'>
          <h2>Confirm Selection</h2>
          <p>Are you certain that you want to proceed with your decision? It is illegal to register a business that you do not own. Please confirm that you own and operate the company you choose. You will be required to submit documents proving the ownership of the business in the following step.</p>
          <div class="alert alert-primary mt-3 mb-4" role="alert">B/N: {businessForm && businessForm.businessName}</div>
          <div className='button-group-account-type'>
            <button className='ghost-button-home' onClick={() => setPrompt(false)}>Go Back</button>
            <button className='ghost-button-home active-button-selection' onClick={confirmPrompt}>Continue <i class="bi bi-arrow-right"></i></button>
          </div>
        </div>
      </div>}

      {businessConflict && 
      <div className='prompt-box-confirm-business'>
        <div className='business-prompt-confirm'>
          <i class="bi bi-exclamation-triangle"></i>
          <h2>A Conflict has occurred</h2>
          <p>The company you're attempting to register is already registered under another person's name. If you're unsure of the cause of the issue, please contact our support team or verify your company's existence before trying again.</p>
          <div class="alert alert-warning mt-3 mb-4" role="alert">B/N: {businessForm && businessForm.businessName}</div>
          <div className='button-group-account-type'>
            <button className='ghost-button-home' onClick={() => setPrompt(false)}>Contact Support</button>
            <button className='ghost-button-home active-button-selection' onClick={reselectBusiness}><i class="bi bi-arrow-left"></i> Change Business</button>
          </div>
        </div>
      </div>}

      
      <div className='business-form-container'>
        <div className='content-sizing-box business-form-wrapper'>
          <div className='header-with-progress-bar-form'>
            <h2>Sign up with us to open a Business Account.</h2>
            <p>the following information will be reviewed and are team will get back to you.</p>
          </div>
          <div className='form-and-progress-business'>
            <ul className='progress-bar-for-form'>
              <li className={active === "one" && "active-item" || completed.one && "complete-item"}>
                <span>1. Information</span>
                <div>
                  <div className={completed.one ? "full-width-complete progress-width" : "progress-width"}></div>
                </div>
              </li>
              <li className={active === "two" && "active-item" || completed.two && "complete-item"}>
                <span>2. Business Inquires</span>
                <div>
                  <div className={completed.two ? "full-width-complete progress-width" : "progress-width"}></div>
                </div>
              </li>
              <li className={active === "three" && "active-item" || completed.three && "complete-item"}>
                <span>3. Ownership Proof</span>
                <div>
                  <div className={completed.three ? "full-width-complete progress-width" : "progress-width"}></div>
                </div>
              </li>
              <li className={active === "four" && "active-item" || completed.four && "complete-item"}>
                <span>4. Complete</span>
                <div>
                  <div className={completed.four ? "full-width-complete progress-width" : "progress-width"}></div>
                </div>
              </li>
            </ul>

            {active === "one" && !completed.one && <InformationForm NextStep={nextStep} BackStep={backStep} SetBusinessForm={setBusinessForm} BusinessForm={businessForm} UpdateUserForm={updateUserForm} SetFieldError={setFieldError} FieldError={fieldError}/>}
            {active === "two" && !completed.two && <BusinessFormStep NextStep={nextStep} BackStep={backStep} SetBusinessForm={setBusinessForm} BusinessForm={businessForm} UpdateUserForm={updateUserForm} SetFieldError={setFieldError} FieldError={fieldError} SetBusinessSearch={setBusinessSearch} BusinessSearch={businessSearch} setPrompt={setPrompt} count={count} SetBusinessConflict={setBusinessConflict} Category={props.Category}/>}
            {active === "three" && !completed.three && <BusinessProof NextStep={nextStep} BackStep={backStep} BusinessForm={businessForm} SetBusinessForm={setBusinessForm} OnSubmit={onSubmit} FilesStatus={filesStatus} SetFileStatus={setFileStatus} SetFieldError={setFieldError} FieldError={fieldError}/>}
            {active === "four" && !completed.four && <PreviewForm NextStep={nextStep} BackStep={backStep} BusinessForm={businessForm} OnSubmit={onSubmit}/>}
            {active === "last" && !completed.last && <BusinessFormSent/>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BusinessForm;