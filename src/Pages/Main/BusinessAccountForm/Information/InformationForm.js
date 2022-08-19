import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2';
export const InformationForm = (props) => {
  const validateField = () => {
    if(props.BusinessForm.fName != "" && props.BusinessForm.lName != "" && props.BusinessForm.phone != "" && props.BusinessForm.email != "") {
      props.NextStep('one', 'two')
    } else {
      if(props.BusinessForm.fName === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, fName: true
        }));
      }

      if(props.BusinessForm.lName === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, lName: true
        }));
      }

      if(props.BusinessForm.phone === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, phone: true
        }));
      }

      if(props.BusinessForm.email === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, email: true
        }));
      }
    }
  }

  const handleOnChange = (res) => {
    props.SetFieldError(prevInput => ({
      ...prevInput, phone: false
    }));
    props.SetBusinessForm(prevInput => ({
      ...prevInput, phone: res
    }));
  };
  
  return (
    <form className="form-container" id="form-location">
      <div className="d-flex mb-3">
        <div className="mb-3 col-md-6 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Legal First Name *</label>
          <input type="Name" className={props.FieldError.fName ? 'form-control is-invalid' : 'form-control'} id="" required="" name="fName" value={props.BusinessForm.fName} onChange={props.UpdateUserForm} placeholder="John"/>
          {props.FieldError.fName && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid first name.</div>}
        </div>
        <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Legal Last Name *</label>
          <input type="Name" className={props.FieldError.lName ? 'form-control is-invalid' : 'form-control'} id="" required="" name="lName" value={props.BusinessForm.lName} onChange={props.UpdateUserForm} placeholder="Smith"/>
          {props.FieldError.lName && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid last name.</div>}
        </div>
      </div>
      <div className="d-flex mb-3">
        <div className="mb-3 col-md-4 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
          <PhoneInput country={'ca'} value={props.BusinessForm.businessPhone} onChange={handleOnChange} autoFormat enableSearch searchClass="form-control" inputClass={props.FieldError.phone ? 'form-control is-invalid' : 'form-control'} buttonClass="" priority={{ca: 1, us: 1, kz: 0, ru: 1}}/>
          {props.FieldError.phone && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid phone number.</div>}
       </div>
        <div className="mb-3 col-md-8  rm-padding-left rm-padding-right  box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
          <input type="email" className={props.FieldError.email ? 'form-control is-invalid' : 'form-control'} id="" required="" name="email" value={props.BusinessForm.email} onChange={props.UpdateUserForm} placeholder="example@example.com"/>
          {props.FieldError.email && <div id="validationServer03Feedback" className=" mt-0 mb-0 error-message">Please provide a valid email.</div>}
        </div>
      </div>
      
      <div className='action-button-form-btns'>
        <p>* Requires the filed to be filled before continue</p>
        <div>
          <a>Go Back</a>
          <a className="ghost-button-home" type='button' onClick={validateField}>Continue</a>
        </div>
      </div>
    </form>
  )
}

export default InformationForm;