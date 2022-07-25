import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../../util/Firebase";

const ConfirmBusiness = (props) => {
  const { prevStep, nextStep, handleChange, values } = props;

  const Continue = e => {
		e.preventDefault();
		nextStep();
	}

	const Previous = e => {
		e.preventDefault();
		prevStep();
	}

	return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">4. Confirm Your Info</h3>
      {/* <p className="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p> */}
      {/* {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>} */}
      <form>
				<div className="mb-3">
					<p>Business Name: {values.businessName}</p>
				</div>
				<div className="mb-3">
					<p>Phone Number: {values.phoneNumber}</p>
				</div>
				<div className="mb-3">
					<p>Email: {values.email}</p>
				</div>
				<div className="mb-3">
					<p>Category: {values.category}</p>
				</div>
				<div className="mb-3">
					<p>Address: {values.address}</p>
				</div>
				<div className="mb-3">
					<p>Description: {values.description}</p>
				</div>
				<div className="mb-3">
					<p>Amenities: </p>
					<ul>
						{values.amenities.map((amenity) => <li style={{marginLeft: "5rem"}}>{amenity.description}</li>)}
					</ul>
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
  
export default ConfirmBusiness;