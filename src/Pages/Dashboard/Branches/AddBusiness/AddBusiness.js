import { useState } from "react";
import MultiStepProgressBar from "../../../../Components/MultiStepProgressBar/MultiStepProgressBar";
import BusinessAmenities from "./Steps/BusinessAmenities";
import BusinessDetails from "./Steps/BusinessDetails";
import BusinessInfo from "./Steps/BusinessInfo";
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
      amenities: '',
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
    setState({ ...state, [input]:  data });
    console.log(state);
  }

  const { step } = state;
  const { businessName, phoneNumber, email, category, businessAddress, description, amenities } = state;
  const values = { businessName, phoneNumber, email, category, businessAddress, description, amenities }

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