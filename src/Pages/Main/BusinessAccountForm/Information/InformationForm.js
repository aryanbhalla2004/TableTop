import React from 'react'

export const InformationForm = (props) => {
  return (
    <form className="form-container" id="form-location">
      <div className="d-flex mb-3">
        <div className="mb-3 col-md-6 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Legal First Name *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="John"/>
        </div>
        <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Legal Last Name *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="Smith"/>
        </div>
      </div>
      <div className="d-flex mb-3">
        <div className="mb-3 col-md-4 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="+1 (232)-234-3122"/>
        </div>
        <div className="mb-3 col-md-8  rm-padding-left rm-padding-right  box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="example@example.com"/>
        </div>
      </div>
      
      <div className='action-button-form-btns'>
        <p>* Requires the filed to be filled before continue</p>
        <div>
          <a>Go Back</a>
          <a className="ghost-button-home" type='button' onClick={() => props.NextStep('one', 'two')}>Continue</a>
        </div>
      </div>
    </form>
  )
}

export default InformationForm;