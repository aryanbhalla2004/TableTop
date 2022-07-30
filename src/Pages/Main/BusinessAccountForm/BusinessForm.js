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

const BusinessForm = () => {
  const history = useNavigate();
  const [businessSearch, setBusinessSearch] = useState(true);
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
    businessDescription: false,
  });

  const [active, setActive] = useState("one");
  const [completed, setCompleted] = useState({
    one: false,
    two: false,
    three: false,
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
    setFieldError(prevInput => ({
      ...prevInput, [e.target.name]: false
    }));
    setBusinessForm(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmit = async (e) => {
    try {
      await firebase.firestore().collection("BusinessInquires").doc().set(businessForm);
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Become a Business Account Member | TableTop</title>
      </Helmet>
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
                  <div className={completed.one ? "full-width-complete progress-width" : "progress-width"}>
                  </div>
                </div>
              </li>
              <li className={active === "two" && "active-item" || completed.two && "complete-item"}>
                <span>2. Business Inquires</span>
                <div>
                  <div className={completed.two ? "full-width-complete progress-width" : "progress-width"}>
                  </div>
                </div>
              </li>
              <li className={active === "three" && "active-item" || completed.three && "complete-item"}>
                <span>3. Complete</span>
                <div><div className={completed.three ? "full-width-complete progress-width" : "progress-width"}></div></div>
              </li>
            </ul>

            {active === "one" && !completed.one && <InformationForm NextStep={nextStep} BackStep={backStep} SetBusinessForm={setBusinessForm} BusinessForm={businessForm} UpdateUserForm={updateUserForm} SetFieldError={setFieldError} FieldError={fieldError}/>}
            {active === "two" && !completed.two && <BusinessFormStep NextStep={nextStep} BackStep={backStep} SetBusinessForm={setBusinessForm} BusinessForm={businessForm} UpdateUserForm={updateUserForm} SetFieldError={setFieldError} FieldError={fieldError} SetBusinessSearch={setBusinessSearch} BusinessSearch={businessSearch}/>}
            {active === "three" && !completed.three && <PreviewForm NextStep={nextStep} BackStep={backStep} BusinessForm={businessForm} OnSubmit={onSubmit}/>}
            {active === "last" && !completed.last && <BusinessFormSent/>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BusinessForm;