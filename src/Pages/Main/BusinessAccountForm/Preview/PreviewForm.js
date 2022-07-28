import React from 'react'

export const PreviewForm = (props) => {
  return (
    <form className="form-container" id="form-location">
      <div className='submition-preview'>
        <h4>Submition Preview</h4>
        <div className='dividing-line'>
          <div className='line-small'/>
          <span>Personal Information</span>
          <div className='line-big'/>
        </div>
        <div className='d-flex mt-3 single-row'>
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Legal First Name *</label>
            <p>Aryan</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Legal First Last *</label>
            <p>Bhalla</p>
          </div>
        </div>
        <div className="d-flex mt-3 single-row">
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
            <p>+1 (204)-890-7313</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right  box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
            <p>aryanbhalla66@gmail.com</p>
          </div>
        </div>
        <div className="d-flex mt-3 single-row">
          <div class="mb-3 col-md-6 rm-padding-left  selection-box-container box-container-field">
            <label for="emailAddress" class="form-label review-form-lable">Business Type</label>
            <p>Restaurent</p>
          </div>
          <div class="mb-3 col-md-6 rm-padding-left rm-padding-right selection-box-container box-container-field">
            <label for="emailAddress" class="form-label review-form-lable">Business Size</label>
            <p>1 - 100+</p>
          </div>
        </div>

        <div className='dividing-line'>
          <div className='line-small'/>
          <span>Buiness Information</span>
          <div className='line-big'/>
        </div>

        <div className="d-flex mt-3 single-row">
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Business Name *</label>
            <p>Clay Oven</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Legal Business # *</label>
            <p>123-232-232</p>
          </div>
        </div>
        <div className="d-flex mt-3 single-row">
          <div className="mb-3 col-md-6 rm-padding-left box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
            <p>+1 (800)-232-2322</p>
          </div>
          <div className="mb-3 col-md-6  rm-padding-left rm-padding-right  box-container-field">
            <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
            <p>info@clayoven.com</p>
          </div>
        </div>
        <div className="mt-3 mb-3 rm-padding-left box-container-field description-container-business-form">
          <label for="emailAddress" className="form-label review-form-lable">Description</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequuntur, exercitationem architecto nobis soluta voluptas tempora id aliquid perspiciatis praesentium laboriosam iste facere qui aut necessitatibus deserunt. Vitae, nulla asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus in assumenda maxime facilis. Ipsam numquam harum accusamus rem, cum neque nulla id, dolore itaque iste nam non incidunt ratione.</p>
        </div>
      </div>
      <div className='action-button-form-btns'>
        <p>The information show ab</p>
        <div>
          <a onClick={() => props.BackStep('two')}>Go Back</a>
          <a className="ghost-button-home" onClick={() => props.NextStep('three', 'last')}>Complete</a>
        </div>
      </div>
    </form>
  )
}

export default PreviewForm;