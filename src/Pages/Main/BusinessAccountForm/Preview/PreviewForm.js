import React, {useState, useEffect} from 'react'
import DocViewer, {DocViewerRenderers} from "react-doc-viewer";


export const PreviewForm = (props) => {
  
  const submit = () => {
    props.NextStep('four', 'last');
    props.OnSubmit();
  }


  return (
    <form className="form-container" id="form-location">
      <div className='submition-preview'>
        <h4>Submission Preview</h4>
        <div className='dividing-line'>
          <div className='line-small'/>
          <span>Personal Information</span>
          <div className='line-big'/>
        </div>
        <div className='d-flex mt-3 single-row'>
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Legal First Name *</label>
            <p>{props.BusinessForm && props.BusinessForm.fName}</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Legal First Last *</label>
            <p>{props.BusinessForm && props.BusinessForm.lName}</p>
          </div>
        </div>
        <div className="d-flex mt-3 single-row">
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
            <p>{props.BusinessForm && props.BusinessForm.phone}</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right  box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
            <p>{props.BusinessForm && props.BusinessForm.email}</p>
          </div>
        </div>

        <div className='dividing-line'>
          <div className='line-small'/>
          <span>Business Information</span>
          <div className='line-big'/>
        </div>

        <div className="d-flex mt-3 single-row">
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Business Name *</label>
            <p>{props.BusinessForm && props.BusinessForm.businessName}</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Legal Business # *</label>
            <p>{props.BusinessForm && props.BusinessForm.businessNumber}</p>
          </div>
        </div>
        <div className="d-flex mt-3 single-row">
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
            <p>{props.BusinessForm && props.BusinessForm.businessPhone}</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right  box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
            <p>{props.BusinessForm && props.BusinessForm.businessEmail}</p>
          </div>
        </div>
        <div className="d-flex mt-3 single-row">
          <div class="mb-3 col-md-6 rm-padding-left  selection-box-container box-container-field">
            <label for="emailAddress" class="form-label review-form-lable">Business Location</label>
            <p>{props.BusinessForm && props.BusinessForm.businessAddress}</p>
          </div>
          <div class="mb-3 col-md-6 rm-padding-left rm-padding-right selection-box-container box-container-field">
            <label for="emailAddress" class="form-label review-form-lable">Business Website</label>
            <p>{props.BusinessForm && props.BusinessForm.businessWebsiteLink}</p>
          </div>
        </div>
        <div className="d-flex mt-3 single-row">
          <div class="mb-3 col-md-6 rm-padding-left  selection-box-container box-container-field">
            <label for="emailAddress" class="form-label review-form-lable">Business Type</label>
            <p>{props.BusinessForm && props.BusinessForm.businessType}</p>
          </div>
          <div class="mb-3 col-md-6 rm-padding-left rm-padding-right selection-box-container box-container-field">
            <label for="emailAddress" class="form-label review-form-lable">Business Size</label>
            <p>{props.BusinessForm && props.BusinessForm.businessSize}</p>
          </div>
        </div>
        <div className="mt-3 mb-3 rm-padding-left box-container-field description-container-business-form">
          <label for="emailAddress" className="form-label review-form-lable">Description</label>
          <p>{props.BusinessForm && props.BusinessForm.businessDescription}</p>
        </div>
      </div>
      <div className='dividing-line'>
        <div className='line-small'/>
        <span>Ownership Document Proof</span>
        <div className='line-big'/>
      </div>
      <div className="d-flex mt-3 single-row">
        <div className="mb-3 col-md-6 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Bank Identity Proof *</label>
          <p className='done-uploaded'><i class="bi bi-check-circle-fill"></i> {props.BusinessForm.one != "" ? "Uploaded Successfully" : "Uploading Failed"}</p>
        </div>
        <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Business Identification Documents *</label>
          <p className='done-uploaded'><i class="bi bi-check-circle-fill"></i> {props.BusinessForm.two != "" ? "Uploaded Successfully" : "Uploading Failed"}</p>
        </div>
      </div>
      <div className='action-button-form-btns'>
        <p>Please go over the information you entered and check for any errors before proceeding.</p>
        <div>
          <a onClick={() => props.BackStep('three')}>Go Back</a>
          <a className="ghost-button-home" onClick={submit}>Complete</a>
        </div>
      </div>
    </form>
  )
}

export default PreviewForm;