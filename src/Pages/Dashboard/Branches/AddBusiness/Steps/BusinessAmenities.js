import { useEffect, useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../../util/Firebase";
import AmenityList from '../../../../../Components/AmenityList/AmenityList';

const BusinessAmenities = (props) => {
	const { prevStep, nextStep, handleChange, values } = props;

	const Continue = e => {
		e.preventDefault();
		nextStep();
	}

	const Previous = e => {
		e.preventDefault();
		prevStep();
	}

	const Update = e => {
		e.preventDefault();

		// const amenities = e.target.value.split(/\r?\n/);
		// console.log(amenities);
		handleChange(e.target.name, e.target.value);
	}

  const initialState = values.amenities;
  const [amenities, setAmenities] = useState(initialState || []);

  useEffect(() => {
    handleChange("amenities", amenities);
  }, [amenities]);

  const handleAddAmenity = (description) => {
    // usually id is determined by an outside provider
    const id = +(Math.random() * 100).toFixed(4);
    // ... (spread operator) take only the values inside this container and move them
    setAmenities((prevState) => [
      ...prevState, 
      { id: id, description: description }
    ]);
  };

  const handleDeleteAmenity = (id) => {
    setAmenities((prevState) => prevState.filter((amenity) => amenity.id !== +id));
  };

  return (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">3. What Amenities do you offer</h3>
      <p className="text-muted mb-4">Please seperate each entry by having one per line.</p>
      {/* {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>} */}
      <form>
				<div className="mb-3">

          <AmenityList
            amenities={amenities}
            addAmenity={handleAddAmenity}
            deleteAmenity={handleDeleteAmenity}
          />

          {/* <label for="amenities" className="form-label">Amenities</label> */}
          {/* <textarea rows="4" cols="50" className={"" ? 'form-control is-invalid' : 'form-control'} id="amenities" required="" name="amenities" value={values.amenities} onChange={Update} placeholder="Business Description"/> */}
          {/* {fieldError.description && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business description.</div>} */}
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

export default BusinessAmenities;