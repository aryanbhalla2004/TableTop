import { useState } from "react";
import MultiStepProgressBar from "../../../../Components/MultiStepProgressBar/MultiStepProgressBar";
import BusinessAmenities from "./Steps/BusinessAmenities";
import BusinessDetails from "./Steps/BusinessDetails";
import BusinessInfo from "./Steps/BusinessInfo";
import BusinessHours from "./Steps/BusinessHours";
import BusinessPhotos from "./Steps/BusinessPhotos";
import ConfirmBusiness from "./Steps/ConfirmBusiness";

const AddBusiness = (props) => {
  const [state, setState] = useState(
    {
      step: 1,
      businessName: '',
      phoneNumber: '',
      email: '',
      category: '',
      businessAddress: '',
      description: '',
      amenities: [],
      hours: {
        sunday: {
          open: '',
          close: '',
        },
        monday: {
          open: '',
          close: '',
        },
        tuesday: {
          open: '',
          close: '',
        },
        wednesday: {
          open: '',
          close: '',
        },
        thursday: {
          open: '',
          close: '',
        },
        friday: {
          open: '',
          close: '',
        },
        saturday: {
          open: '',
          close: '',
        },
      },
      images: [],
    }
  )

  // go back to previous step
  const prevStep = () => {
    const { step } = state;
    setState({ ...state, step: step - 1 });
  }

  // proceed to the next step
  const nextStep = () => {
    const { step } = state;
    setState({ ...state, step: step + 1 });
  }

  // handle field change
  const handleChange = (input, data) => {
    setState({ ...state, [input]: data });
    console.log(state.images)
  }

  const { step } = state;
  const { businessName, phoneNumber, email, category, businessAddress, description, amenities, hours, images } = state;
  const values = { businessName, phoneNumber, email, category, businessAddress, description, amenities, hours, images }

  switch (step) {
    case 1: 
      return (
        <>
          <MultiStepProgressBar currentStep={state.step} />
          <BusinessDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </>
      )
    case 2: 
      return (
        <>
          <MultiStepProgressBar currentStep={state.step} />
          <BusinessInfo 
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </>
      )
    case 3: 
      return (
        <>
          <MultiStepProgressBar currentStep={state.step} />
          <BusinessAmenities
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </>
      )
    case 4: 
      return (
        <>
          <MultiStepProgressBar currentStep={state.step} />
          <BusinessHours
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </>
      )
    case 5:
      return (
        <>
          <MultiStepProgressBar currentStep={state.step} />
          <BusinessPhotos
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </>
      )
    case 6:
      return (
        <>
          <MultiStepProgressBar currentStep={state.step} />
          <ConfirmBusiness
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </>
      )
    default:
       // do nothing
  }
}

export default AddBusiness;