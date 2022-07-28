import { useState, useCallback } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { motion } from "framer-motion";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import moment from 'moment';
import {firebase} from "../../../../../util/Firebase";
import ImageGrid from './../../../../../Components/DropBox/ImageGrid/ImageGrid';
import DropZone from './../../../../../Components/DropBox/DropZone/DropZone';

const BusinessPhotos = (props) => {
  const { prevStep, nextStep, handleChange, values } = props;

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

  const Continue = (e) => {
		e.preventDefault();
    Update();
		nextStep();
	}

	const Previous = (e) => {
		e.preventDefault();
		prevStep();
	}

	const Update = () => {
		handleChange("images", images);
	}

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <h3 className="title-auth">5. Upload photos to display on your page</h3>
      {/* <p className="text-muted mb-4">Please choose an account type below. Various pieces of information will be requested depending on your choice.</p> */}
      {/* {fieldError.message && <div className="alert alert-danger mt-0" role="alert">{fieldError.message}</div>} */}
      <form>
        <div className="dropbox-container">
          <h1 className="dropbox-text-center">Drag and Drop Test</h1>
          <DropZone onDrop={onDrop} accept={"image/*"} />
          <ImageGrid images={images} />
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

export default BusinessPhotos;