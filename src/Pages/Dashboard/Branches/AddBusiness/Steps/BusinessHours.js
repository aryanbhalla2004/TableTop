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
    props.BranchForm.hours[e.target.name.split(" ")[0]].hours[e.target.name.split(" ")[1]] = e.target.value;
    props.UpdateUserForm(e);
	}

  const HandleCheck = (e) => {
    const elements = document.getElementsByClassName(`${e.target.name} hour-input`);
    for (let element of elements) {
      element.disabled = !element.disabled
    }
    
    props.BranchForm.hours[e.target.name].operating = document.getElementById(`${e.target.name}-operating`).checked;

    const status = document.getElementsByClassName(`${e.target.name} hour-text`);
    if (status[0].textContent === "Open") {
      status[0].textContent = "Closed";
    } else {
      status[0].textContent = "Open";
    }
    props.UpdateUserForm(e);
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
            <input type="checkbox" name="sunday" onChange={HandleCheck} id={"sunday-operating"}  checked={props.BranchForm.hours.sunday.operating}/>
            <span class="slider round"></span>
          </label>
          <p className="sunday hour-text">Closed</p>
          <label for="sunday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'sunday hour-input'} id="sunday-opened" required="" name="sunday open" onChange={Update} value={props.BranchForm.hours.sunday.hours.open}/>
          <label for="sunday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'sunday hour-input'} id="sunday-closed" required="" name="sunday close" onChange={Update} value={props.BranchForm.hours.sunday.hours.close}/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Monday</p>
          <label class="switch">
            <input type="checkbox" name="monday" onChange={HandleCheck} id={"monday-operating"}  checked={props.BranchForm.hours.monday.operating}/>
            <span class="slider round"></span>
          </label>
          <p className="monday hour-text">Closed</p>
          <label for="monday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'monday hour-input'} id="monday-opened" required="" name="monday open" onChange={Update} value={props.BranchForm.hours.monday.hours.open}/>
          <label for="monday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'monday hour-input'} id="monday-closed" required="" name="monday close" onChange={Update} value={props.BranchForm.hours.monday.hours.close}/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Tuesday</p>
          <label class="switch">
            <input type="checkbox" name="tuesday" onChange={HandleCheck} id={"tuesday-operating"}  checked={props.BranchForm.hours.tuesday.operating}/>
            <span class="slider round"></span>
          </label>
          <p className="tuesday hour-text">Closed</p>
          <label for="tuesday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'tuesday hour-input'} id="tuesday-opened" required="" name="tuesday open" onChange={Update} value={props.BranchForm.hours.tuesday.hours.open}/>
          <label for="tuesday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'tuesday hour-input'} id="tuesday-closed" required="" name="tuesday close" onChange={Update} value={props.BranchForm.hours.tuesday.hours.close}/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Wednesday</p>
          <label class="switch">
            <input type="checkbox" name="wednesday" onChange={HandleCheck} id={"wednesday-operating"}  checked={props.BranchForm.hours.wednesday.operating}/>
            <span class="slider round"></span>
          </label>
          <p className="wednesday hour-text">Closed</p>
          <label for="wednesday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'wednesday hour-input'} id="wednesday-opened" required="" name="wednesday open" onChange={Update} value={props.BranchForm.hours.wednesday.hours.open}/>
          <label for="wednesday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'wednesday hour-input'} id="wednesday-closed" required="" name="wednesday close" onChange={Update} value={props.BranchForm.hours.wednesday.hours.close}/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Thursday</p>
          <label class="switch">
            <input type="checkbox" name="thursday" onChange={HandleCheck} id={"thursday-operating"}  checked={props.BranchForm.hours.thursday.operating}/>
            <span class="slider round"></span>
          </label>
          <p className="thursday hour-text">Closed</p>
          <label for="thursday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'thursday hour-input'} id="thursday-opened" required="" name="thursday open" onChange={Update} value={props.BranchForm.hours.thursday.hours.open}/>
          <label for="thursday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'thursday hour-input'} id="thursday-closed" required="" name="thursday close" onChange={Update} value={props.BranchForm.hours.thursday.hours.close}/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Friday</p>
          <label class="switch">
            <input type="checkbox" name="friday" onChange={HandleCheck} id={"friday-operating"}  checked={props.BranchForm.hours.friday.operating}/>
            <span class="slider round"></span>
          </label>
          <p className="friday hour-text">Closed</p>
          <label for="friday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'friday hour-input'} id="friday-opened" required="" name="friday open" onChange={Update} value={props.BranchForm.hours.friday.hours.open}/>
          <label for="friday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'friday hour-input'} id="friday-closed" required="" name="friday close" onChange={Update} value={props.BranchForm.hours.friday.hours.close}/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Saturday</p>
          <label class="switch">
            <input type="checkbox" name="saturday" onChange={HandleCheck} id={"saturday-operating"}  checked={props.BranchForm.hours.saturday.operating}/>
            <span class="slider round"></span>
          </label>
          <p className="saturday hour-text">Closed</p>
          <label for="saturday-open" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'saturday hour-input'} id="saturday-opened" required="" name="saturday open" onChange={Update} value={props.BranchForm.hours.saturday.hours.open} />
          <label for="saturday-close" className="form-label"></label>
          <input type="time" disabled={true} className={"" ? 'form-control is-invalid' : 'saturday hour-input'} id="saturday-closed" required="" name="saturday close"onChange={Update} value={props.BranchForm.hours.saturday.hours.close} />
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