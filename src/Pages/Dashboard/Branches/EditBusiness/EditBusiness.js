import { useState, useCallback } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../util/Firebase";
import ImageGrid from './../../../../Components/DropBox/ImageGrid/ImageGrid';
import DropZone from './../../../../Components/DropBox/DropZone/DropZone';
import AmenityList from '../../../../Components/AmenityList/AmenityList';
import { useEffect } from 'react';

const EditBusiness = (props) => {
  let { prevStep, nextStep, handleChange, values } = props;

  values = {images: []}
  handleChange = function () {};



  const Update = e => {
		e.preventDefault();
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

  const [images, setImages] = useState(values.images);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: Math.random().toString(36).slice(2), src: e.target.result },
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">Edit Your Business Information</h3>
      <p className="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p>
      {/* {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>} */}
      <form>
				<div className="mb-3">
          <label for="emailAddress" className="form-label">Business Name</label>
          <input type="Name" className={"" ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="businessName" value={values.businessName} onChange={Update} placeholder="Business Name"/>
          {/* {fieldError.businessName && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business name.</div>} */}
        </div>
        <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Please use your Businesses Legal Name as it appears on your legal documents.</small>
        <div className="mb-3">
          <label for="phoneNumber" className="form-label">Phone Number</label>
          <input type="phoneNumber" className={"" ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="phoneNumber" value={values.phoneNumber} onChange={Update} placeholder="Phone Number" />
          {/* {fieldError.phoneNumber && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid phone number.</div>} */}
        </div>
        <div className="mb-3">
          <label for="emailAddress" className="form-label">Email Address</label>
          <input type="email" className={"" ? 'form-control is-invalid' : 'form-control'} id="emailAddress" required="" name="email" value={values.email} onChange={Update} placeholder="Enter Your Email"/>
          {/* {fieldError.email && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid email.</div>} */}
        </div>
        <div className="mb-3">
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
					{/* {fieldError.category && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid selection.</div>} */}
				</div>
				<div className="mb-3">
          <label for="address" className="form-label">Business Address</label>
          <input type="Name" className={"" ? 'form-control is-invalid' : 'form-control'} id="businessAddress" required="" name="businessAddress" value={values.businessAddress} onChange={Update} placeholder="Business Address"/>
          {/* {fieldError.businessAddress && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business address.</div>} */}
        </div>
        <small id="passwordHelpBlock" className="form-text text-muted light-under-field-text">Please use your Businesses Legal Address as it appears on your legal documents.</small>
        <div className="mb-3">
          <label for="description" className="form-label">Business Description</label>
          <textarea rows="4" cols="50" className={"" ? 'form-control is-invalid' : 'form-control'} id="description" required="" name="description" value={values.description} onChange={Update} placeholder="Business Description"/>
          {/* {fieldError.description && <div id="validationServer03Feedback" className="invalid-feedback mt-0 mb-0">Please provide a valid business description.</div>} */}
        </div>
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
        <div className="mb-3">
          <p className="hour-text">Sunday</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="hour-text">Open</p>
          <label for="sunday-open" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="sundayOpen" required="" name="hours.sunday.open" onChange={Update} placeholder="Opens At"/>
          <label for="sunday-close" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="sundayClose" required="" name="sunday-close" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Monday</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="hour-text">Open</p>
          <label for="monday-open" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="mondayOpen" required="" name="hours" onChange={Update} placeholder="Opens At"/>
          <label for="monday-close" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="mondayClose" required="" name="hours" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Tuesday</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="hour-text">Open</p>
          <label for="tuesday-open" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="tuesdayOpen" required="" name="hours" onChange={Update} placeholder="Opens At"/>
          <label for="tuesday-close" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="tuesdayClose" required="" name="hours" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Wednesday</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="hour-text">Open</p>
          <label for="wednesday-open" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="wednesdayOpen" required="" name="hours" onChange={Update} placeholder="Opens At"/>
          <label for="wednesday-close" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="wednesdayClose" required="" name="hours" onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Thursday</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="hour-text">Open</p>
          <label for="thursday-open" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="thursdayOpen" required="" name="hours"onChange={Update} placeholder="Opens At"/>
          <label for="thursday-close" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="thursdayClose" required="" name="hours" value={values.hours} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Friday</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="hour-text">Open</p>
          <label for="friday-open" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="fridayOpen" required="" name="hours" value={values.hours} placeholder="Opens At"/>
          <label for="friday-close" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="fridayClose" required="" name="hours" value={values.hours} placeholder="Closes At"/>
        </div>
        <div className="mb-3">
          <p className="hour-text">Saturday</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="hour-text">Open</p>
          <label for="saturday-open" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="saturdayOpen" required="" name="hours" value={values.hours} onChange={Update} placeholder="Opens At"/>
          <label for="saturday-close" className="form-label"></label>
          <input type="time" className={"" ? 'form-control is-invalid' : 'hour-input'} id="saturdayClose" required="" name="hours" value={values.hours} onChange={Update} placeholder="Closes At"/>
        </div>
        <div className="dropbox-container">
          <h1 className="dropbox-text-center">Drag and Drop Test</h1>
          <DropZone onDrop={onDrop} accept={"image/*"} />
          <ImageGrid images={images} />
        </div>

        {/* <div className="d-grid my-4">
          <button className="btn btn-primary full-width height-10px" type="submit" onClick={Continue} disabled={"" ? true : false}>
            { 
              "" ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> : "Next"
            }
          </button>
        </div> */}
        {/* <Link to="/dashboard/branches">
          <p className="text-2 text-dark text-center mt-4 mb-0"><i className="bi bi-arrow-left"></i> Go Back</p>
        </Link> */}
      </form>
    </motion.div>
  );
}

export default EditBusiness;