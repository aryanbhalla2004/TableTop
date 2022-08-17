import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../../util/Firebase";
import MultiStepProgressBar from '../../../../../Components/MultiStepProgressBar/MultiStepProgressBar';

const BusinessDetails = (props) => {
	const { nextStep, handleChange, values } = props;

	const Continue = e => {
		nextStep();
	}

	const Update = e => {
		e.preventDefault();
		handleChange(e.target.name, e.target.value);
	}

  const validateField = (e) => {
    e.preventDefault();
    if(props.BranchForm.businessName != ""  && props.BranchForm.phoneNumber != "" && props.BranchForm.email != "") {
      Continue();
    } else {
      if(props.BranchForm.businessName === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, fName: true
        }));
      }

      if(props.BranchForm.phoneNumber === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, phone: true
        }));
      }

      if(props.BranchForm.email === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, email: true
        }));
      }
    }
  }

  // const history = useNavigate();
  // const [userInput, setUserInput, setFieldError, fieldError] = useOutletContext();
  // const [score, setScore] = useState();
  // const [loading, setLoading] = useState(false);

  // const updateUserInput = (e) => {
  //   setUserInput(prevInput => ({
  //     ...prevInput, [e.target.name]: e.target.value
  //   }));

  //   setFieldError(prevInput => ({
  //     ...prevInput, [e.target.name]: false
  //   }));

  //   if(e.target.name == "password") {
  //     setFieldError(prevInput => ({
  //       ...prevInput, message: ''
  //     }));
  //   }
  // }

  // const onSubmit = async (e) => {
  //   setLoading(true)
  //   e.preventDefault();    
  //   if(userInput.email != "" && userInput.password != "" && userInput.firstName != "" && userInput.lastName != "") {
  //     if(userInput.firstName.match(/^[a-zA-Z]+$/) && userInput.lastName.match(/^[a-zA-Z]+$/))
  //       if(userInput.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
  //         if(score > 2) {
  //           if(userInput.password == userInput.confirmPassword) {
  //           // if(userInput.accountType !== "Regular") {
  //           //   history("/auth/signup/account-vendor")
  //           // } else {
  //           //   history("/auth/")
  //           // }]
  //             try {
  //               let informationUser = await props.SignUp(userInput.email, userInput.password);
  //               let userId = informationUser.user.uid;
  //               console.log(userId);
  //               const user = {
  //                 firstName: userInput.firstName,
  //                 lastName: userInput.lastName,
  //                 email: userInput.email,
  //                 createdDate: moment().format("YYYY MM DD")
  //               }
  //               await firebase.firestore().collection("Users").doc(userId).set(user);
              
  //               if(informationUser.user.emailVerified) {
  //                 history('/');
  //               } else {
  //                 history('/auth/email-activation');
  //               }
                
  //             } catch(e) {
  //               setLoading(false);
              
  //               setFieldError(prevInput => ({
  //                 ...prevInput, message: e.message
  //               }));
  //             }
  //           } else {
  //             setLoading(false);
  //             setFieldError(prevInput => ({
  //               ...prevInput, confirmPassword: true
  //             }));
  //           }
  //         } else {
  //           setLoading(false);
          
  //           setFieldError(prevInput => ({
  //             ...prevInput, message: 'Your password is a bit weak; a little extra effort will secure your account.'
  //           }));
  //         }
  //       } else {
  //         setLoading(false);
        
  //         setFieldError(prevInput => ({
  //           ...prevInput, email: true
  //         }));
  //       } else {
  //         if(!userInput.firstName.match(/^[a-zA-Z]+$/)) {
  //           setLoading(false);
          
  //           setFieldError(prevInput => ({
  //             ...prevInput, firstName: true
  //           }));
  //         }
        
  //         if(!userInput.lastName.match(/^[a-zA-Z]+$/)) {
  //           setLoading(false);
          
  //           setFieldError(prevInput => ({
  //             ...prevInput, lastName: true
  //           }));
  //         }
  //       }
  //   } else {
  //     setLoading(false);
  //     if(userInput.lastName == "") {
  //       setFieldError(prevInput => ({
  //         ...prevInput, lastName: true
  //       }));
  //     }

  //     if(userInput.email == "") {
  //       setFieldError(prevInput => ({
  //         ...prevInput, email: true
  //       }));
  //     } 

  //     if(userInput.password == "") {
  //       setFieldError(prevInput => ({
  //         ...prevInput, password: true
  //       }));
  //     }

  //     if(userInput.firstName == "") {
  //       setFieldError(prevInput => ({
  //         ...prevInput, firstName: true
  //       }));
  //     }

  //     if(userInput.confirmPassword == "") {
  //       setFieldError(prevInput => ({
  //         ...prevInput, confirmPassword: true
  //       }));
  //     }

  //     // setFieldError(prevInput => ({
  //     //   ...prevInput, message: "Invalid Email/Password"
  //     // }));
  //   }
  // }

  // const changeScore = (score) => {
  //   setScore(score);
  // }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      
      <h3 className="title-auth">1. Your Business Information</h3>
      <p className="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p>
      {/* {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>} */}
      <form>


				{/* <div className="mb-3">
          <label for="emailAddress" className="form-label">Business Name</label>
          <input type="Name" className={"" ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="businessName" value={values.businessName} onChange={Update} placeholder="Business Name"/>
          {fieldError.businessName && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business name.</div>}
        </div> */}

        <div className="mb-3">
          <label for="emailAddress" className="form-label review-form-lable">Business Name *</label>
          <input type="Name" className={props.FieldError.businessName ? 'form-control is-invalid' : 'form-control'} id="" required="" name="businessName" value={props.BranchForm.businessName} onChange={props.UpdateUserForm} placeholder="Business Name"/>
          {props.FieldError.businessName && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid email.</div>}
        </div>


        {/* <div className="d-flex">
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right">
            <label for="emailAddress" className="form-label">Last Name</label>
            <input type="Name" className={fieldError.lastName ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="lastName" value={userInput.lastName} onChange={updateUserInput} placeholder="Last Name"/>
            {fieldError.lastName && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid last name.</div>}
          </div>
        </div> */}

        <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Please use your Businesses Official Title as it appears on your legal documents.</small>
        
        <div className="mb-3">
          <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
          <input type="tel" className={props.FieldError.phoneNumber ? 'form-control is-invalid' : 'form-control'} id="" required="" name="phoneNumber" value={props.BranchForm.phoneNumber} onChange={props.UpdateUserForm} placeholder="+1 (232)-234-3122"/>
          {props.FieldError.phoneNumber && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid email.</div>}
       </div>

       <div className="mb-3">
          <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
          <input type="email" className={props.FieldError.email ? 'form-control is-invalid' : 'form-control'} id="" required="" name="email" value={props.BranchForm.email} onChange={props.UpdateUserForm} placeholder="example@example.com"/>
          {props.FieldError.email && <div id="validationServer03Feedback" className=" mt-0 mb-0 error-message">Please provide a valid email.</div>}
        </div>

        {/* <div className="mb-3">
          <label for="phoneNumber" className="form-label">Phone Number</label>
          <input type="phoneNumber" className={"" ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="phoneNumber" value={values.phoneNumber} onChange={Update} placeholder="Phone Number" />
          {fieldError.phoneNumber && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid phone number.</div>}
        </div> */}

        {/* <div className="mb-3">
          <label for="emailAddress" className="form-label">Email Address</label>
          <input type="email" className={"" ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="email" value={values.email} onChange={Update} placeholder="Enter Your Email"/>
          {fieldError.email && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid email.</div>}
        </div> */}
        
        <div className="d-grid my-4">
          <button className="btn btn-primary full-width height-10px" type="submit" onClick={Continue} disabled={"" ? true : false}>
            { 
              "" ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> : "Next"
            }
          </button>
        </div>
        <Link to="/dashboard/branches">
          <p className="text-2 text-dark text-center mt-4 mb-0"><i className="bi bi-arrow-left"></i> Go Back</p>
        </Link>
      </form>
    </motion.div>
  )
}

export default BusinessDetails