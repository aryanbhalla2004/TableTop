import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../../util/Firebase";

const BusinessHours = (props) => {
  const { prevStep, nextStep, handleChange, values } = props;

  const Continue = (e) => {
		e.preventDefault();
		nextStep();
	}

	const Previous = (e) => {
		e.preventDefault();
		prevStep();
	}

	const Update = (e) => {
		e.preventDefault();
		handleChange(values.hours.sunday.open, e.target.value);
    console.log(values)
	}

  const HandleCheck = (e) => {
    const elements = document.getElementsByClassName(`${e.target.name} hour-input`);
    for (let element of elements) {
      element.disabled = !element.disabled
    }
    

    const status = document.getElementsByClassName(`${e.target.name} hour-text`);
    if (status[0].textContent === "Open") {
      status[0].textContent = "Closed";
    } else {
      status[0].textContent = "Open";
    }
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">4. What are your store hours</h3>
      {/* <p className="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p> */}
      {/* {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>} */}
      <form onSubmit={Update}>
        <div className="mb-3">
          <p className="hour-text">Sunday</p>
          <label class="switch">
            <input type="checkbox" name="sunday" onChange={HandleCheck} />
            <span class="slider round"></span>
          </label>
          <p className="sunday hour-text">Closed</p>
          <label for="sunday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'sunday hour-input'} id="sunday" required="" name="hours.sunday.open" onChange={Update} placeholder="Opens At"/>
          <label for="sunday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'sunday hour-input'} id="sunday" required="" name="sunday-close" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Monday</p>
          <label class="switch">
            <input type="checkbox" name="monday" onChange={HandleCheck} />
            <span class="slider round"></span>
          </label>
          <p className="monday hour-text">Closed</p>
          <label for="monday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'monday hour-input'} id="monday" required="" name="hours" onChange={Update} placeholder="Opens At"/>
          <label for="monday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'monday hour-input'} id="monday" required="" name="hours" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Tuesday</p>
          <label class="switch">
            <input type="checkbox" name="tuesday" onChange={HandleCheck} />
            <span class="slider round"></span>
          </label>
          <p className="tuesday hour-text">Closed</p>
          <label for="tuesday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'tuesday hour-input'} id="tuesday" required="" name="hours" onChange={Update} placeholder="Opens At"/>
          <label for="tuesday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'tuesday hour-input'} id="tuesday" required="" name="hours" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Wednesday</p>
          <label class="switch">
            <input type="checkbox" name="wednesday" onChange={HandleCheck} />
            <span class="slider round"></span>
          </label>
          <p className="wednesday hour-text">Closed</p>
          <label for="wednesday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'wednesday hour-input'} id="wednesday" required="" name="hours" onChange={Update} placeholder="Opens At"/>
          <label for="wednesday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'wednesday hour-input'} id="wednesday" required="" name="hours" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Thursday</p>
          <label class="switch">
            <input type="checkbox" name="thursday" onChange={HandleCheck} />
            <span class="slider round"></span>
          </label>
          <p className="thursday hour-text">Closed</p>
          <label for="thursday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'thursday hour-input'} id="thursday" required="" name="hours"onChange={Update} placeholder="Opens At"/>
          <label for="thursday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'thursday hour-input'} id="thursday" required="" name="hours" value={values.hours} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Friday</p>
          <label class="switch">
            <input type="checkbox" name="friday" onChange={HandleCheck} />
            <span class="slider round"></span>
          </label>
          <p className="friday hour-text">Closed</p>
          <label for="friday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'friday hour-input'} id="friday" required="" name="hours" value={values.hours} placeholder="Opens At"/>
          <label for="friday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'friday hour-input'} id="friday" required="" name="hours" value={values.hours} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Saturday</p>
          <label class="switch">
            <input type="checkbox" name="saturday" onChange={HandleCheck} />
            <span class="slider round"></span>
          </label>
          <p className="saturday hour-text">Closed</p>
          <label for="saturday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'saturday hour-input'} id="saturday" required="" name="hours" value={values.hours} onChange={Update} placeholder="Opens At"/>
          <label for="saturday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'saturday hour-input'} id="saturday" required="" name="hours" value={values.hours} onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="d-grid my-4">
					<button className="btn btn-primary full-width height-10px" type="submit" onClick={Continue} disabled={"" ? true : false}>
            { 
              "" ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> : "Continue"
            }
          </button>
        </div>
          <p className="text-2 text-dark text-center mt-4 mb-0" style={{cursor: "pointer"}} onClick={Previous}><i className="bi bi-arrow-left"></i> Go Back</p>
      </form>
    </motion.div>
  );
}

export default BusinessHours