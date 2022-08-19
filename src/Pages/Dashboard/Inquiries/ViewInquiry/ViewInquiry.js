import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {firebase} from "../../../../util/Firebase";
import { send } from 'emailjs-com';
import DashboardHeading from '../../../../Components/DashboardHeading/DashboardHeading';
import moment from 'moment';
import { Button } from 'react-bootstrap';

const ViewInquiry = (props) => {
  const { id } = useParams();
  const [inquiry, setInquiry] = useState([]);
  const [rejectSuccess, setRejectSuccess] = useState(false);
  const [acceptSuccess, setAcceptSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("general");
  const [reasons, setReasons] = useState({
    accept: '',
    reject: '',
  })
  const [rejectPrompt, setReject] = useState(false);
  const [acceptPrompt, setAccept] = useState(false);

  useEffect(() => {
    let user = firebase.firestore().collection('BusinessInquires').doc(id);
    user.onSnapshot((querySnapShot) => {
      setInquiry(querySnapShot.data());
    });
  }, []);

  useEffect(() => {
    if(inquiry && !inquiry.read) {
      firebase.firestore().collection('BusinessInquires').doc(id).update({...inquiry, read: true});
    }
  }, [inquiry]);

  const reject = () => {
    setLoading(true);
    if(reasons.reject != "") {
      firebase.firestore().collection('BusinessInquires').doc(id).update({...inquiry, status: "Rejected"});
      send('service_4no1q8t', 'template_ps655ab',
        {
          from_name: 'TableTop',
          to_name: inquiry.fName,
          businessName: inquiry.businessName,
          message: reasons.reject,
          reply_to: inquiry.businessEmail,
        },
        'db9qm4jXT2AwGt4gs'
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setTimeout(() => {
          setLoading(false);
          setReject(false);
          window.scroll(0,0);
        }, 1000);
        setRejectSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    } else {
      console.log("error empty box");
      setLoading(false);
    }
    
  }

  const accept = async () => {
    setLoading(true);
    firebase.firestore().collection('BusinessInquires').doc(id).update({...inquiry, status: "Accepted"});
    send('service_4no1q8t', 'template_s1kkvj7',
      {
        from_name: 'TableTop',
        to_name: inquiry.fName,
        businessName: inquiry.businessName,
        link: `https://views.live/auth/signup/${id}`,
        message: reasons.accept,
        reply_to: inquiry.businessEmail,
      },
      'db9qm4jXT2AwGt4gs'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setTimeout(() => {
          setLoading(false);
          setAccept(false);
          window.scroll(0,0);
        }, 1000);
        setAcceptSuccess(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setLoading(false);
      });
  }

  const updateUserInput = (e) => {
    setReasons(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  return (
    <>
      {rejectPrompt && 
      <div className='prompt-box-confirm-business remove-padding'>
        <div className='business-prompt-confirm relative-box'>
          <i class="bi bi-folder-x"></i>
          <h2>Are you Sure?</h2>
          <p>When an application is rejected, the end user will get a rejection email with the reasons you listed below.</p>
          <div class="alert alert-danger mt-3 mb-4" role="alert">B/N: {inquiry.businessName && inquiry.businessName}</div>
          <div class="mb-4 rm-padding-left selection-box-container full-width">
            <label for="emailAddress" class="form-label review-form-lable">Reason of Rejection *</label>
            <textarea className="form-control" name='reject' value={reasons.reject} onChange={updateUserInput}></textarea>
          </div>
          <div className='button-group-account-type'>
            <button className='ghost-button-home' onClick={() => setReject(false)}>Close</button>
            <button className="btn btn-danger" onClick={reject}><i class="bi bi-trash"></i> Confirm Reject</button>
          </div>
          {loading && 
          <div className='overlay-loading'>
            <div class="spinner-border text-light center-spinner" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <p>Please Wait</p>
          </div>}
        </div>
      </div>}

      {acceptPrompt && 
      <div className='prompt-box-confirm-business remove-padding'>
        <div className='business-prompt-confirm'>
          <i class="bi bi-folder-x"></i>
          <h2>Are you Sure?</h2>
          <p>The company you're attempting to register is already registered under another person's name. If you're unsure of the cause of the issue, please contact our support team or verify your company's existence before trying again.</p>
          <div class="alert alert-success mt-3 mb-4" role="alert">B/N: {inquiry.businessName && inquiry.businessName}</div>
          <div class="mb-4 rm-padding-left selection-box-container full-width">
            <label for="emailAddress" class="form-label review-form-lable">Notes / Comments</label>
            <textarea className="form-control" name='accept' value={reasons.accept} onChange={updateUserInput}></textarea>
          </div>
          <div className='button-group-account-type'>
            <button className='ghost-button-home' onClick={() => setAccept(false)}>Close</button>
            <button className="btn btn-success" onClick={accept}><i class="bi bi-check2-all"></i> Confirm Accept</button>
          </div>
          {loading && 
          <div className='overlay-loading'>
            <div class="spinner-border text-light center-spinner" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <p>Please Wait</p>
          </div>}
        </div>
      </div>}


      <DashboardHeading name="Business Inquire" backButton={true} backpath={'/dashboard/inquiries'}/>
      <ul className="list-selection-settings">
        <li><a href="#" onClick={() => setCurrentLocation('general')} className={currentLocation === "general" && "active-button-setting"}>General Information</a></li>
        <li><a href="#"onClick={() => setCurrentLocation('document')} className={currentLocation === "document" && "active-button-setting"}>Document Proof</a></li>
      </ul>
      {rejectSuccess || acceptSuccess && <div class="alert alert-success mt-3 mb-4 flex-with-space-between" role="alert">An email has been sent to the vendors email Successfully. <i class="bi bi-x" onClick={() => setRejectSuccess(false) || setAcceptSuccess(false)}></i></div>}
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className='dividing-line'>
            <div className='line-small'/>
            <span>Personal Information</span>
            <div className='line-big'/>
          </div>
          <div className='d-flex mt-3 single-row'>
            <div className="mb-3 col-md-6 rm-padding-left box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Legal First Name *</label>
              <p>{inquiry && inquiry.fName}</p>
            </div>
            <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Legal First Last *</label>
              <p>{inquiry && inquiry.lName}</p>
            </div>
          </div>
          <div className="d-flex mt-3 single-row">
            <div className="mb-3 col-md-6 rm-padding-left box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
              <p>{inquiry && inquiry.phone}</p>
            </div>
            <div className="mb-3 col-md-6  rm-padding-left rm-padding-right  box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
              <p>{inquiry && inquiry.email}</p>
            </div>
          </div>
          <div className="d-flex mt-3 single-row">
            <div class="mb-3 col-md-6 rm-padding-left  selection-box-container box-container-field">
              <label for="emailAddress" class="form-label review-form-lable">Business Type</label>
              <p>{inquiry && inquiry.businessType}</p>
            </div>
            <div class="mb-3 col-md-6 rm-padding-left rm-padding-right selection-box-container box-container-field">
              <label for="emailAddress" class="form-label review-form-lable">Business Size</label>
              <p>{inquiry && inquiry.businessSize}</p>
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
              <p>{inquiry && inquiry.businessName}</p>
            </div>
            <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Legal Business # *</label>
              <p>{inquiry && inquiry.businessNumber}</p>
            </div>
          </div>
          <div className="d-flex mt-3 single-row">
            <div className="mb-3 col-md-6 rm-padding-left box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Phone Number</label>
              <p>{inquiry && inquiry.businessPhone}</p>
            </div>
            <div className="mb-3 col-md-6  rm-padding-left rm-padding-right  box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Email Address *</label>
              <p>{inquiry && inquiry.businessEmail}</p>
            </div>
          </div>
          <div className="mt-3 mb-3 rm-padding-left box-container-field description-container-business-form">
            <label for="emailAddress" className="form-label review-form-lable">Description</label>
            <p>{inquiry && inquiry.businessDescription}</p>
          </div>
          <div className='dividing-line'>
            <div className='line-small'/>
            <span>Ownership Document Proof</span>
            <div className='line-big'/>
          </div>
          <div className="d-flex mt-3 single-row">
            <div className="mb-3 col-md-6 rm-padding-left box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Bank Identity Proof *</label>
              <p className='done-uploaded'><i class="bi bi-check-circle-fill"></i> {inquiry.one != "" ? "Uploaded Successfully" : "Uploading Failed"}</p>
            </div>
            <div className="mb-3 col-md-6  rm-padding-left rm-padding-right box-container-field">
              <label for="emailAddress" className="form-label review-form-lable">Business Identification Documents *</label>
              <p className='done-uploaded'><i class="bi bi-check-circle-fill"></i> {inquiry.two != "" ? "Uploaded Successfully" : "Uploading Failed"}</p>
            </div>
          </div>
        </div>
      </div>  
      <div className='action-button-form-btns mt-4'>
        {inquiry.status === "Pending" && <p>Please review the information above before making any decisions.</p>}
        {inquiry.status === "Rejected" && <p>This following application was Rejected</p> }
        {inquiry.status === "Accepted" && <p>This following application was Accepted</p> }
        {inquiry.status === "Pending" && 
        <div>
          <button onClick={() => setReject(true)} className="btn btn-danger" type="button"><i class="bi bi-file-earmark-x"></i> Reject</button>
          <button onClick={() => setAccept(true)} className="btn btn-success" type="button"><i class="bi bi-check2-all"></i> Accept</button>
        </div> }

        {inquiry.status === "Accepted" && 
        <div>
          <button className="btn btn-success" type="button" disabled><i class="bi bi-check2-all"></i>Application Accepted</button>
        </div> }

        {inquiry.status === "Rejected" && 
        <div>
          <button className="btn btn-danger" type="button" disabled>Application Rejected</button>
        </div> }
      </div>
    </>
  );
}

export default ViewInquiry;