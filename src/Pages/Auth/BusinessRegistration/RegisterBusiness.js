import { useState, useEffect } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link, useParams } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../util/Firebase";

const RegisterBusiness = (props) => {
  const { id } = useParams();
  const [inquiry, setInquiry] = useState([]);
  const history = useNavigate();
  const [score, setScore] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let user = firebase.firestore().collection('BusinessInquires').doc(id);
    user.onSnapshot((querySnapShot) => {
      setInquiry(querySnapShot.data());
    });
  }, []);

  useEffect(() => {
    setUserInput(prevInput => ({
      ...prevInput, firstName: inquiry.fName
    }));

    setUserInput(prevInput => ({
      ...prevInput, lastName: inquiry.lName
    }));

    setUserInput(prevInput => ({
      ...prevInput, email: inquiry.businessEmail
    }));
  }, [inquiry])

  const [userInput, setUserInput] = useState({
    accountType: "Business",
    firstName: '',
    lastName: '',
    email: '',
    confirmPassword: '',
    password: '',
  });

  const [fieldError, setFieldError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    confirmPassword: false,
    password: false,
    message: ''
  });

  const updateUserInput = (e) => {
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const changeScore = (score) => {
    setScore(score)
  }

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();    
    if(userInput.email != "" && userInput.password != "" && userInput.firstName != "" && userInput.lastName != "") {
      if(userInput.firstName.match(/^[a-zA-Z]+$/) && userInput.lastName.match(/^[a-zA-Z]+$/))
        if(userInput.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          if(score > 2) {
            if(userInput.password == userInput.confirmPassword) {
              try {
                let informationUser = await props.SignUp(userInput.email, userInput.password);
                let userId = informationUser.user.uid;
                console.log(userId);
                const user = {
                  accountType: "Business",
                  firstName: userInput.firstName,
                  lastName: userInput.lastName,
                  email: userInput.email,
                  createdDate: moment().format("YYYY MM DD"),
                  notficationSettings: {
                    Activity: true,
                    Chat: true,
                    Location: true
                  }
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
    }
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 class="title-auth">1. Account Information</h3>
      <p class="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p>
      {fieldError.message && <div class="alert alert-danger mt-0" role="alert">{fieldError.message}</div>}
      <form onSubmit={onSubmit}>
        <div class="d-flex">
          <div class="mb-3 col-md-6 rm-padding-left">
            <label for="emailAddress" class="form-label">First Name</label>
            <input type="Name" className={fieldError.firstName ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="firstName" value={userInput.firstName} onChange={updateUserInput} placeholder="First Name" disabled/>
          </div>
          <div class="mb-3 col-md-6  rm-padding-left rm-padding-right">
            <label for="emailAddress" class="form-label">Last Name</label>
            <input type="Name" className={fieldError.lastName ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="lastName" value={userInput.lastName} onChange={updateUserInput} placeholder="Last Name" disabled/>
          </div>
        </div>
        <small id="passwordHelpBlock" class="form-text text-muted light-under-field-text">Please use your Legal First & Last Name as it appears on your legal documents.</small>
        <div class="mb-3">
          <label for="emailAddress" class="form-label">Email Address</label>
          <input type="email" className={fieldError.email ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="email" value={userInput.email} onChange={updateUserInput} placeholder="Enter Your Email" disabled/>
          {fieldError.email && <div id="validationServer03Feedback" class="invalid-feedback mt-0 mb-0">Please provide a valid email.</div>}
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" className={fieldError.password ? 'form-control is-invalid' : 'form-control'} id="password" required="" name="password" value={userInput.password} onChange={updateUserInput} placeholder="Enter Password"/>
          {fieldError.password && <div id="validationServer03Feedback" class="invalid-feedback mt-0 mb-0">Please provide a valid password.</div>}
        </div>
        <small id="passwordHelpBlock" class="form-text text-muted light-under-field-text">Your password must be 8-20 characters long.</small>
        <PasswordStrengthBar password={userInput.password} onChangeScore={changeScore}/>
        <div class="mb-3">
          <label for="password" class="form-label ">Re-Password</label>
          <input type="password" className={!fieldError.password && fieldError.confirmPassword ? 'form-control is-invalid' : 'form-control'} id="password" required="" name="confirmPassword" value={userInput.confirmPassword} onChange={updateUserInput} placeholder="Enter Re-Password"/>
          {fieldError.confirmPassword && !fieldError.password && <div id="validationServer03Feedback" class="invalid-feedback mt-0 mb-0">Password doesn't match.</div>}
        </div>
        
        <div class="d-grid my-4">
          <button class="btn btn-primary full-width height-10px" type="submit" disabled={loading ? true : false}>
            { 
              loading ? 
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div> : "Continue"
            }
          </button>
        </div>
        <Link to="/auth">
          <p class="text-2 text-dark text-center mt-4 mb-0"><i class="bi bi-arrow-left"></i> Go Back</p>
        </Link>
      </form>
    </motion.div>
  )
}

export default RegisterBusiness;