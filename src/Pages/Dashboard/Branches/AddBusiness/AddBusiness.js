import { useState } from "react";
import MultiStepProgressBar from "../../../../Components/MultiStepProgressBar/MultiStepProgressBar";
import BusinessAmenities from "./Steps/BusinessAmenities";
import BusinessDetails from "./Steps/BusinessDetails";
import BusinessInfo from "./Steps/BusinessInfo";
import BusinessHours from "./Steps/BusinessHours";
import BusinessPhotos from "./Steps/BusinessPhotos";
import ConfirmBusiness from "./Steps/ConfirmBusiness";

const AddBusiness = (props) => {
  // const history = useNavigate();
  // const [businessSearch, setBusinessSearch] = useState(true);
  // const [businessForm, setBusinessForm] = useState({
  //   fName: '',
  //   lName: '',
  //   phone: '',
  //   email: '',
  //   businessName: '',
  //   businessNumber: '',
  //   businessPhone: '',
  //   businessEmail: '',
  //   businessAddress: '',
  //   businessWebsiteLink: '',
  //   businessType: '',
  //   businessSize: '',
  //   businessDescription: '',
  //   business: {},
  //   createdDate: new Date().toLocaleString(),
  // });

  // const [active, setActive] = useState("one");
  // const [completed, setCompleted] = useState({
  //   one: false,
  //   two: false,
  //   three: false,
  //   last: false
  // });

  // const nextStep = (current, next) => {
  //   setActive(next);
  //   setCompleted(prevInput => ({
  //     ...prevInput, [current]: true
  //   }));
  //   window.scrollTo(0, 0);
  // }

  // const backStep = (prev) => {
  //   window.scrollTo(0, 0);
  //   setActive(prev);
  //   setCompleted(prevInput => ({
  //     ...prevInput, [prev]: false
  //   }));
  // }

  

  // const onSubmit = async (e) => {
  //   try {
  //     await firebase.firestore().collection("BusinessInquires").doc().set(businessForm);
  //   } catch(e) {
  //     console.log(e.message);
  //   }
  // }



  const [branchForm, setBranchForm] = useState(
    {
      step: 1,
      businessName: '',
      phoneNumber: '',
      email: '',
      category: '',
      businessAddress: '',
      coordinates: {
        lat: '',
        lng: ''
      },
      description: '',
      amenities: [],
      hours: {
        sunday: {
          operating: false,
          hours: {
            open: '',
            close: '',
          }
        },
        monday: {
          operating: false,
          hours: {
            open: '',
            close: '',
          }
        },
        tuesday: {
          operating: false,
          hours: {
            open: '',
            close: '',
          }
        },
        wednesday: {
          operating: false,
          hours: {
            open: '',
            close: '',
          }
        },
        thursday: {
          operating: false,
          hours: {
            open: '',
            close: '',
          }
        },
        friday: {
          operating: false,
          hours: {
            open: '',
            close: '',
          }
        },
        saturday: {
          operating: false,
          hours: {
            open: '',
            close: '',
          }
        },
      },
      images: [],
    }
  )

  const [fieldError, setFieldError] = useState({
    businessName: false,
    phoneNumber: false,
    email: false,
    category: false,
    businessAddress: false,
    description: false,
    amenities: false,
  });

  // go back to previous step
  const prevStep = () => {
    const { step } = branchForm;
    setBranchForm({ ...branchForm, step: step - 1 });
  }

  // proceed to the next step
  const nextStep = () => {
    const { step } = branchForm;
    setBranchForm({ ...branchForm, step: step + 1 });
  }

  // handle field change
  const handleChange = (input, data) => {
    setBranchForm({ ...branchForm, [input]: data });
    console.log(branchForm.images)
  }

  const { step } = branchForm;
  const { businessName, phoneNumber, email, category, businessAddress, description, amenities, hours, images } = branchForm;
  const values = { businessName, phoneNumber, email, category, businessAddress, description, amenities, hours, images }

  const updateUserForm = (e) => {
    setFieldError(prevInput => ({
      ...prevInput, [e.target.name]: false
    }));
    setBranchForm(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  switch (step) {
    case 1: 
      return (
        <>
          <MultiStepProgressBar currentStep={branchForm.step} />
          <BusinessDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            SetBranchForm={setBranchForm}
            BranchForm={branchForm} 
            UpdateUserForm={updateUserForm} 
            SetFieldError={setFieldError} 
            FieldError={fieldError}
          />
        </>
      )
    case 2: 
      return (
        <>
          <MultiStepProgressBar currentStep={branchForm.step} />
          <BusinessInfo 
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            SetBranchForm={setBranchForm}
            BranchForm={branchForm} 
            UpdateUserForm={updateUserForm} 
            SetFieldError={setFieldError} 
            FieldError={fieldError}
          />
        </>
      )
    case 3: 
      return (
        <>
          <MultiStepProgressBar currentStep={branchForm.step} />
          <BusinessAmenities
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            SetBranchForm={setBranchForm}
            BranchForm={branchForm} 
            UpdateUserForm={updateUserForm} 
            SetFieldError={setFieldError} 
            FieldError={fieldError}
          />
        </>
      )
    case 4: 
      return (
        <>
          <MultiStepProgressBar currentStep={branchForm.step} />
          <BusinessHours
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            SetBranchForm={setBranchForm}
            BranchForm={branchForm} 
            UpdateUserForm={updateUserForm} 
            SetFieldError={setFieldError} 
            FieldError={fieldError}
          />
        </>
      )
    case 5:
      return (
        <>
          <MultiStepProgressBar currentStep={branchForm.step} />
          <BusinessPhotos
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            SetBranchForm={setBranchForm}
            BranchForm={branchForm} 
            UpdateUserForm={updateUserForm} 
            SetFieldError={setFieldError} 
            FieldError={fieldError}
          />
        </>
      )
    case 6:
      return (
        <>
          <MultiStepProgressBar currentStep={branchForm.step} />
          <ConfirmBusiness
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            SetBranchForm={setBranchForm}
            BranchForm={branchForm} 
            UpdateUserForm={updateUserForm} 
            SetFieldError={setFieldError} 
            FieldError={fieldError}
          />
        </>
      )
    default:
       // do nothing
  }
}

export default AddBusiness;