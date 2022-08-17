import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../../util/Firebase";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng
} from "react-places-autocomplete";

const BusinessInfo = (props) => {
	const { prevStep, nextStep, handleChange, values } = props;

	const Continue = e => {
		e.preventDefault();
		nextStep();
	}

	const Previous = e => {
		e.preventDefault();
		prevStep();
	}

	const Update = value => {
		props.SetBranchForm(prevInput => ({
      ...prevInput, businessAddress: value
    }));
	}

	const handleSelect = async value => {
		const results = await geocodeByAddress(value);
		const latLng = await getLatLng(results[0]);
		Update(value);
		props.SetBranchForm(prevInput => ({
      ...prevInput, coordinates: latLng
    }));
	};

	return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">2. Tell Us About Your Business</h3>
      {/* <p className="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p> */}
      {/* {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>} */}
      <form>

			<div className="mb-3 col-md-6 rm-padding-left  selection-box-container">
        <label for="emailAddress" class="form-label review-form-lable">Business Category</label>
        <select className="select-field-review" name='category' value={props.BranchForm.category} onChange={props.UpdateUserForm}>
          <option default>Type of Business</option>
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
      </div>

			<div className="mb-3">
        <label for="emailAddress" className="form-label review-form-lable">Business Address *</label>
				<PlacesAutocomplete
					value={props.BranchForm.businessAddress}
					onChange={Update}
					onSelect={handleSelect}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						// <input type="Name" className="form-control" id="autocomplete" required="" name="businessAddress" value={props.BranchForm.businessAddress} onChange={props.UpdateUserForm} placeholder="232 Regent Ave, Winnipeg MB, Canada"/>
						<div>
							<input {...getInputProps({ className:"form-control", placeholder:"Type Address"})}/>
							<div>
								{loading ? <div>...loading</div> : null}

								{suggestions.map((suggestion) => {
									const style = {
										backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
									};

									return (
										<div {...getSuggestionItemProps(suggestion, { style })}>
											{suggestion.description}
										</div>
									);
								})}
							</div>
						</div>
					)}
				</PlacesAutocomplete>
      </div>

			<div class="mb-3 rm-padding-left selection-box-container">
        <label for="emailAddress" class="form-label review-form-lable">Description</label>
        <textarea className="form-control" name='description' value={props.BranchForm.description} onChange={props.UpdateUserForm}></textarea>
      </div>

			{/* <div className="mb-3">
					<label for="category" className="form-label">Category</label>
					<select className={"" ? 'form-control is-invalid' : 'form-control'}  id="category" required="" name="category" value={values.category} onChange={Update}>
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
				</div> */}

				{/* <div className="mb-3">
          <label for="address" className="form-label">Business Address</label>
          <input type="Name" className={"" ? 'form-control is-invalid' : 'form-control'} id="businessAddress" required="" name="businessAddress" value={values.businessAddress} onChange={Update} placeholder="Business Address"/>
          {fieldError.businessAddress && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business address.</div>}
        </div> */}
        
				{/* <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Please use your Businesses Legal Address as it appears on your legal documents.</small> */}
        
				{/* <div className="mb-3">
          <label for="description" className="form-label">Business Description</label>
          <textarea rows="4" cols="50" className={"" ? 'form-control is-invalid' : 'form-control'} id="description" required="" name="description" value={values.description} onChange={Update} placeholder="Business Description"/>
          {fieldError.description && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business description.</div>}
        </div> */}
        
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

export default BusinessInfo;