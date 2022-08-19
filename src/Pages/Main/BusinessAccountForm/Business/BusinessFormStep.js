import React, {useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import PlacesAutocomplete, {geocodeByAddress,getLatLng} from "react-places-autocomplete";
import { db } from "../../../../util/Firebase";

export const BusinessFormStep = (props) => {
  const [businessConflict, setBusinessConflict] = useState(false);
  const [businessList, setBusinessList] = useState();
  const [firstSearch, setFirstSearch] = useState(true);
  const [sameEmailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchInfo, setSearchInfo] = useState({
    location: '',
    q: "",
  });

  const manually = () => {
    window.scrollTo(0, 0);
    props.SetBusinessSearch(false);
    props.SetBusinessForm(prevInput => ({
      ...prevInput, businessNumber: ""
    }));
    props.SetBusinessForm(prevInput => ({
      ...prevInput, business: {}
    }));
    props.SetBusinessForm(prevInput => ({
      ...prevInput, businessName: ""
    }));
  }

  const updateUserForm = (e) => {
    setSearchInfo(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const fetchData = async (e) => {
    e.preventDefault();
    setFirstSearch(false);
    setLoading(true);
    const response = await fetch(`https://searchapi.mrasservice.ca/Search/api/v1/search?fq=keyword:%7B${searchInfo.q}%7D&lang=en&location=${searchInfo.location}&queryaction=fieldquery&sortfield=score&sortorder=desc`)
    const result = await response.json();
    setBusinessList(result.docs);
    setLoading(false);
  }

  const nextStep = (item) => {
    console.log(item);
    props.setPrompt(true);
    props.SetBusinessForm(prevInput => ({
      ...prevInput, businessNumber: item['BN']
    }));
    props.SetBusinessForm(prevInput => ({
      ...prevInput, businessName: item['Company_Name']
    }));

    props.SetBusinessForm(prevInput => ({
      ...prevInput, business: item
    }));
  }

  const handleSelect = async value => {
		const results = await geocodeByAddress(value);
		const latLng = await getLatLng(results[0]);
		Update(value);
		props.SetBusinessForm(prevInput => ({
      ...prevInput, coordinates: latLng
    }));
	};


  const handleOnChange = (res) => {
    props.SetFieldError(prevInput => ({
      ...prevInput, businessPhone: false
    }));
    props.SetBusinessForm(prevInput => ({
      ...prevInput, businessPhone: res
    }));
  };


  const validateField = async () => {
    const temp = [];
    if(props.BusinessForm.businessName != "" && props.BusinessForm.businessNumber != "" && props.BusinessForm.businessPhone != "" && props.BusinessForm.businessEmail != "" && props.BusinessForm.businessAddress != "" && props.BusinessForm.businessWebsiteLink != "" && props.BusinessForm.businessType != "" && props.BusinessForm.businessSize != "" && props.BusinessForm.businessDescription != "" && props.BusinessForm.businessEmail.toLowerCase() != props.BusinessForm.email.toLowerCase()) {
      console.log("sdsds");
      const citiesRef = db.collection('BusinessInquires');
      const snapshot = await citiesRef.where('businessNumber', '==', props.BusinessForm.businessNumber).get();
      if (snapshot.empty) {
        console.log('No matching documents.');
        props.NextStep("two", "three");
      } else {
        console.log('conflict');
        props.SetBusinessConflict(true);
      }

    } else {
      if(props.BusinessForm.businessEmail.toLowerCase() === props.BusinessForm.email.toLowerCase()) {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessEmail: true
        }));
        setEmailError(true);
      }

      if(props.BusinessForm.businessName === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessName: true
        }));
      }

      if(props.BusinessForm.businessNumber === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessNumber: true
        }));
      }

      if(props.BusinessForm.businessPhone === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessPhone: true
        }));
      }

      if(props.BusinessForm.businessEmail === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessEmail: true
        }));
      }

      if(props.BusinessForm.businessAddress === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessAddress: true
        }));
      }

      if(props.BusinessForm.businessWebsiteLink === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessWebsiteLink: true
        }));
      }

      if(props.BusinessForm.businessType === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessType: true
        }));
      }

      if(props.BusinessForm.businessSize === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessSize: true
        }));
      }

      if(props.BusinessForm.businessDescription === "") {
        props.SetFieldError(prevInput => ({
          ...prevInput, businessDescription: true
        }));
      }

    }
  }

  const Update = value => {
    props.SetFieldError(prevInput => ({
      ...prevInput, businessAddress: false
    }));
		props.SetBusinessForm(prevInput => ({
      ...prevInput, businessAddress: value
    }));
	}


  return (
    <>
    
    {props.BusinessSearch && 
    <form className="form-container" id="form-location" onSubmit={fetchData}>
      <h2 className='header-text-search-business'>Find Your Business</h2>
      <div className='initial-search-text'>Please search for and choose your company. If your company doesn't seem to be listed in the results, try manually entering the data.</div>
      <div className="d-flex search-business-box">
        <div class="mb-3 col-md-3 rm-padding-left selection-box-container">
          <label for="emailAddress" class="form-label review-form-lable">Business Location</label>
          <select className="select-field-review" name='location' value={searchInfo.location} onChange={updateUserForm}>
            <option value="" default>All Location</option>
            <option value="MB">Manitoba</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="QC">Québec</option>
            <option value="SK">Saskatchewan</option>
          </select>
        </div>
        <div className="mb-3 col-md-9 rm-padding-left rm-padding-right search-business-box">
          <div className='box-container-field'>
            <label for="emailAddress" className="form-label review-form-lable">Business Identification</label>
            <input type="Name" className="form-control" id="q" required="" name="q" value={searchInfo.q} onChange={updateUserForm} placeholder="Search companies by name, business number, or registry ID"/>
          </div>
          <button className="ghost-button-home search-button-business-form"><i class="bi bi-search"></i> Search</button>
        </div>
      </div>
      <div className='search-results'>
        <div className='header-top-item-search'>
          <span>{businessList && businessList.length > 0 ? businessList.length : "No"} {businessList && businessList.length > 1 ? "Results" : "Result"} Found</span>
          <a onClick={manually}>Add Business Manually</a>
        </div>
        <ul className='results-chamber'>
        {
          businessList && businessList.map(item => (
            <li onClick={() => nextStep(item)}>
              <h4>{item.Company_Name}</h4>
              <p><b>Status:</b> {item.Status_State}</p>
              <p><b>Created:</b> {item.Display_Date}</p>
              <p><b>Registered Office Location:</b> {item.Reg_office_city}, {item.Reg_office_province}</p>
              <p><b>Registry ID:</b> {item.Juri_ID}</p>
            </li>
          ))
        }
        </ul>
        {!firstSearch && !loading && businessList && businessList.length < 1 && <div className='initial-search-text alert alert-warning mb-0'>OOps, Seems like there no business corresponding to the information you provided. Please try again with something different</div>}
        {loading && <div className='centering-loading'><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> <p>Please Wait</p></div>}
      </div>
      <button className="ghost-button-home mt-4" onClick={() => props.BackStep('one')}>Go back</button>
    </form>}


    {!props.BusinessSearch && 
    <form className="form-container" id="form-location" autocomplete="off">
      <div className="d-flex mb-3">
        <div className="mb-3 col-md-6 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Business Name *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="businessName" value={props.BusinessForm.businessName} onChange={props.UpdateUserForm} placeholder="Example Company LTD." disabled={(props.BusinessForm.businessName != "" && Object.keys(props.BusinessForm.business).length != 0 && props.BusinessForm.business.Company_Name !== "") ? true : false}/>
          {props.FieldError.businessName && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid Business Name.</div>}
        </div>
        <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Legal Business # *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="businessNumber" value={props.BusinessForm.businessNumber} onChange={props.UpdateUserForm} placeholder="2328402" disabled={(props.BusinessForm.businessNumber != "" && props.BusinessForm.business['BN'] != "" && Object.keys(props.BusinessForm.business).length != 0) ? true : false}/>
          {props.FieldError.businessNumber && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a Business Number.</div>}
        </div>
      </div>
      <div className="d-flex mb-3">
        
        
        <div className="mb-3 col-md-4 rm-padding-left box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Phone Number *</label>
          <PhoneInput country={'ca'} value={props.BusinessForm.businessPhone} onChange={handleOnChange} autoFormat enableSearch searchClass="form-control" inputClass="form-control" buttonClass="" priority={{ca: 1, us: 1, kz: 0, ru: 1}}/>
          {props.FieldError.businessPhone && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid Phone Number.</div>}
        </div> 
        <div className="mb-3 col-md-8  rm-padding-left rm-padding-right  box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Business Email Address *</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="businessEmail" value={props.BusinessForm.businessEmail} onChange={props.UpdateUserForm} placeholder="example@example.com"/>
          {props.FieldError.businessEmail && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid Business Email address. {sameEmailError && "The address entered above must differ from the one entered earlier."}</div>}
        </div>
      </div>
      <div className="d-flex mb-3">
        <div className="mb-3 col-md-8  rm-padding-left   box-container-field">
          <label for="" className="form-label review-form-lable">Business Address *</label>
          <PlacesAutocomplete
					value={props.BusinessForm.businessAddress}
					onChange={Update}
					onSelect={handleSelect}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						// <input type="Name" className="form-control" id="autocomplete" required="" name="businessAddress" value={props.BranchForm.businessAddress} onChange={props.UpdateUserForm} placeholder="232 Regent Ave, Winnipeg MB, Canada"/>
							<>
              <input {...getInputProps({ className:"form-control", placeholder:"123 example ave, California, USA 223321", autocomplete: "off"})}/>
							<div className='suggestion-location'>
								{loading ? <div>...loading</div> : null}

								{suggestions.map((suggestion) => {
									const style = {
										backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
									};

									return (
										<div {...getSuggestionItemProps(suggestion, { style })}>
                      <i class="bi bi-geo-alt"></i>
											{suggestion.description}
										</div>
									);
								})}
							</div>
              </>
					)}
				</PlacesAutocomplete>
        {props.FieldError.businessAddress && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid Address.</div>}
        </div>
        <div className="mb-3 col-md-4 rm-padding-left rm-padding-right box-container-field">
          <label for="emailAddress" className="form-label review-form-lable">Website URL</label>
          <input type="Name" className="form-control" id="emailAddress" required="" name="businessWebsiteLink" value={props.BusinessForm.businessWebsiteLink} onChange={props.UpdateUserForm} placeholder="https://www.example.com"/>
        </div>
      </div>
      <div className="d-flex mb-3">
        <div class="mb-3 col-md-6 rm-padding-left  selection-box-container">
          <label for="emailAddress" class="form-label review-form-lable">Business Type *</label>
          <select className="select-field-review" name='businessType' value={props.BusinessForm.businessType} onChange={props.UpdateUserForm}>
            <option default>Type of Business</option>
            {props.Category && props.Category.map((item, index) => (
              <option value={item.secondaryName} key={index}>{item.name && item.name}</option>
            ))}
          </select>
          {props.FieldError.businessType && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please select a type of business.</div>}
        </div>
        <div class="mb-3 col-md-6 rm-padding-left rm-padding-right selection-box-container">
          <label for="emailAddress" class="form-label review-form-lable">Business Size *</label>
          <select className="select-field-review" name='businessSize' value={props.BusinessForm.businessSize} onChange={props.UpdateUserForm}>
            <option default>Size of Business</option>
            <option value="1 - 10">1 - 10</option>
            <option value="10 - 100">10 - 100</option>
            <option value="100 - 1,000">100 - 1,000</option>
            <option value="1,000 - 10,000+">1,000 - 10,000 +</option>
          </select>
          {props.FieldError.businessSize && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please select the size of your business.</div>}
        </div>
      </div>
      <div class="mb-3 rm-padding-left selection-box-container">
        <label for="emailAddress" class="form-label review-form-lable">Tell us about our business *</label>
        <textarea className="form-control business-description-text-box" name='businessDescription' value={props.BusinessForm.businessDescription} onChange={props.UpdateUserForm}></textarea>
        <div className='words-count'>{props.FieldError.businessDescription && <div id="validationServer03Feedback" className="mt-0 mb-0 error-message">Please provide a valid description of your business.</div>}</div>
      </div>
      <div className='action-button-form-btns'>
        <p>* Requires the filed to be filled before continue</p>
        <div>
          <a onClick={() => props.SetBusinessSearch(true)}>Go Back</a>
          <a className="ghost-button-home" onClick={validateField}>Continue</a>
        </div>
      </div>
    </form> }
    </>
  )
}

export default BusinessFormStep;