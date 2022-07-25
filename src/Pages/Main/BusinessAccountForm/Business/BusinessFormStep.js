import React from 'react'
import { Link } from 'react-router-dom';

export const BusinessFormStep = (props) => {
  return (
    <form className="form-container" id="form-location">
      <div className="d-flex mb-3">
        <div className="mb-3 col-md-6 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Business Name *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="John"/>
        </div>
        <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Legal Business # *</label>
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
      <div className="d-flex mb-3">
      <div className="mb-3 col-md-8  rm-padding-left   box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Business Address *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="232 Regent Ave, Winnipeg MB, Canada"/>
        </div>
        <div className="mb-3 col-md-4 rm-padding-left rm-padding-right box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Website URL</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="https://www.example.com"/>
        </div>
      </div>
      <div className="d-flex mb-3">
        <div class="mb-3 col-md-6 rm-padding-left  selection-box-container">
          <label for="emailAddress" class="form-label review-form-lable">Business Type</label>
          <select className="select-field-review">
            <option default>Type of Business</option>
            <option>Cleanliness</option>
            <option>Cleanliness</option>
            <option>Accuracy</option>
            <option>Location</option>
          </select>
        </div>
        <div class="mb-3 col-md-6 rm-padding-left rm-padding-right selection-box-container">
          <label for="emailAddress" class="form-label review-form-lable">Business Size</label>
          <select className="select-field-review">
            <option default>Size of Business</option>
            <option>1 - 10</option>
            <option>10 - 100</option>
            <option>100 - 1,000</option>
            <option>1,000 - 10,000 +</option>
          </select>
        </div>
      </div>
      <div class="mb-3 rm-padding-left selection-box-container">
        <label for="emailAddress" class="form-label review-form-lable">Description</label>
        <textarea className="form-control"></textarea>
      </div>
      <div className='action-button-form-btns'>
        <p>* Requires the filed to be filled before continue</p>
        <div>
          <a onClick={() => props.BackStep('one')}>Go Back</a>
          <a className="ghost-button-home" onClick={() => props.NextStep('two', 'three')}>Continue</a>
        </div>
      </div>
    </form>
  )
}

export default BusinessFormStep;