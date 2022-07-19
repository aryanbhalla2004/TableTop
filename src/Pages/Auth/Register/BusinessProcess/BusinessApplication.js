import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../util/Firebase";

const BusinessApplication = (props) => {
  const history = useNavigate();
  const [userInput, setUserInput, setFieldError, fieldError] = useOutletContext();
  const [score, setScore] = useState();
  const [loading, setLoading] = useState(false);

  const updateUserInput = (e) => {
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));

    setFieldError(prevInput => ({
      ...prevInput, [e.target.name]: false
    }));

    if(e.target.name == "password") {
      setFieldError(prevInput => ({
        ...prevInput, message: ''
      }));
    }
  }

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();    
    if(userInput.email != "" && userInput.password != "" && userInput.firstName != "" && userInput.lastName != "") {
      if(userInput.firstName.match(/^[a-zA-Z]+$/) && userInput.lastName.match(/^[a-zA-Z]+$/))
        if(userInput.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          if(score > 2) {
            if(userInput.password == userInput.confirmPassword) {
            // if(userInput.accountType !== "Regular") {
            //   history("/auth/signup/account-vendor")
            // } else {
            //   history("/auth/")
            // }]
              try {
                let informationUser = await props.SignUp(userInput.email, userInput.password);
                let userId = informationUser.user.uid;
                console.log(userId);
                const user = {
                  firstName: userInput.firstName,
                  lastName: userInput.lastName,
                  email: userInput.email,
                  createdDate: moment().format("YYYY MM DD")
                }
                await firebase.firestore().collection("Users").doc(userId).set(user);
              
                if(informationUser.user.emailVerified) {
                  history('/');
                } else {
                  history('/auth/email-activation');
                }
                
              } catch(e) {
                setLoading(false);
              
                setFieldError(prevInput => ({
                  ...prevInput, message: e.message
                }));
              }
            } else {
              setLoading(false);
              setFieldError(prevInput => ({
                ...prevInput, confirmPassword: true
              }));
            }
          } else {
            setLoading(false);
          
            setFieldError(prevInput => ({
              ...prevInput, message: 'Your password is a bit weak; a little extra effort will secure your account.'
            }));
          }
        } else {
          setLoading(false);
        
          setFieldError(prevInput => ({
            ...prevInput, email: true
          }));
        } else {
          if(!userInput.firstName.match(/^[a-zA-Z]+$/)) {
            setLoading(false);
          
            setFieldError(prevInput => ({
              ...prevInput, firstName: true
            }));
          }
        
          if(!userInput.lastName.match(/^[a-zA-Z]+$/)) {
            setLoading(false);
          
            setFieldError(prevInput => ({
              ...prevInput, lastName: true
            }));
          }
        }
    } else {
      setLoading(false);
      if(userInput.lastName == "") {
        setFieldError(prevInput => ({
          ...prevInput, lastName: true
        }));
      }

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

      if(userInput.firstName == "") {
        setFieldError(prevInput => ({
          ...prevInput, firstName: true
        }));
      }

      if(userInput.confirmPassword == "") {
        setFieldError(prevInput => ({
          ...prevInput, confirmPassword: true
        }));
      }

      // setFieldError(prevInput => ({
      //   ...prevInput, message: "Invalid Email/Password"
      // }));
    }
  }

  const changeScore = (score) => {
    setScore(score);
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">1. Your Business Information</h3>
      <p className="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p>
      {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>}
      <form onSubmit={onSubmit}>
				<div className="mb-3">
          <label for="emailAddress" className="form-label">Business Name</label>
          <input type="Name" className={fieldError.businessName ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="businessName" value={userInput.businessName} onChange={updateUserInput} placeholder="Business Name"/>
          {fieldError.businessName && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business name.</div>}
        </div>
        {/* <div className="d-flex">
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right">
            <label for="emailAddress" className="form-label">Last Name</label>
            <input type="Name" className={fieldError.lastName ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="lastName" value={userInput.lastName} onChange={updateUserInput} placeholder="Last Name"/>
            {fieldError.lastName && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid last name.</div>}
          </div>
        </div> */}
        <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Please use your Businesses Legal Name as it appears on your legal documents.</small>
        <div className="mb-3">
          <label for="phoneNumber" className="form-label">Phone Number</label>
          <input type="phoneNumber" className={fieldError.phoneNumber ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="phoneNumber" value={userInput.phoneNumber} onChange={updateUserInput} placeholder="Phone Number" />
          {fieldError.phoneNumber && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid phone number.</div>}
        </div>
        <div className="mb-3">
          <label for="emailAddress" className="form-label">Email Address</label>
          <input type="email" className={fieldError.email ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="email" value={userInput.email} onChange={updateUserInput} placeholder="Enter Your Email"/>
          {fieldError.email && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid email.</div>}
        </div>
				<div className="mb-3">
					<label for="category" className="form-label">Category</label>
					<select className={fieldError.email ? 'form-control is-invalid' : 'form-control'}  id="category" required="" name="category" value={userInput.category} onChange={updateUserInput}>
						<option defaultValue="blank">--select--</option>
						<option value="resturant">Resturant</option>
  					<option value="beauty">Beauty</option>
  					<option value="fitness">Fitness</option>
  					<option value="barbers">Barbers</option>
						<option value="auto">Auto</option>
						<option value="vehicles">Vehicles</option>
						<option value="dealership">Dealership</option>
						<option value="clothing">Barbers</option>
						<option value="shoes">Shoes</option>
						<option value="electronics">Electronics</option>
						<option value="books">Books</option>
						<option value="literature">Literature</option>
						<option value="fast food">Fast Food</option>
						<option value="health">Health</option>
						<option value="medical">Medical</option>
						<option value="gaming">Gaming</option>
					</select>
					{fieldError.category && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid selection.</div>}
				</div>
				<div className="mb-3">
          <label for="address" className="form-label">Business Address</label>
          <input type="Name" className={fieldError.businessAddress ? 'form-control is-invalid' : 'form-control'} id="businessAddress" required="" name="businessAddress" value={userInput.businessAddress} onChange={updateUserInput} placeholder="Business Address"/>
          {fieldError.businessAddress && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business address.</div>}
        </div>
        <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Please use your Businesses Legal Address as it appears on your legal documents.</small>
        <div className="mb-3">
          <label for="description" className="form-label">Business Description</label>
          <textarea rows="4" cols="50" className={fieldError.description ? 'form-control is-invalid' : 'form-control'} id="description" required="" name="description" value={userInput.description} onChange={updateUserInput} placeholder="Business Description"/>
          {fieldError.description && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business description.</div>}
        </div>
				{/* <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className={fieldError.password ? 'form-control is-invalid' : 'form-control'} id="password" required="" name="password" value={userInput.password} onChange={updateUserInput} placeholder="Enter Password"/>
          {fieldError.password && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid password.</div>}
        </div>
        <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Your password must be 8-20 characters long.</small>
        <PasswordStrengthBar password={userInput.password} onChangeScore={changeScore}/>
        <div className="mb-3">
          <label for="password" className="form-label ">Re-Password</label>
          <input type="password" className={!fieldError.password && fieldError.confirmPassword ? 'form-control is-invalid' : 'form-control'} id="password" required="" name="confirmPassword" value={userInput.confirmPassword} onChange={updateUserInput} placeholder="Enter Re-Password"/>
          {fieldError.confirmPassword && !fieldError.password && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Password doesn't match.</div>}
        </div> */}
        
        <div className="d-grid my-4">
          <button className="btn btn-primary full-width height-10px" type="submit" disabled={loading ? true : false}>
            { 
              loading ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> : "Continue"
            }
          </button>
        </div>
        <Link to="/auth">
          <p className="text-2 text-dark text-center mt-4 mb-0"><i className="bi bi-arrow-left"></i> Go Back</p>
        </Link>
      </form>
    </motion.div>
  )
}

export default BusinessApplication;