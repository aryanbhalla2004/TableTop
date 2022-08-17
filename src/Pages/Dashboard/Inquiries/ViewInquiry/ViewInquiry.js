import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {firebase} from "../../../../util/Firebase";
import { send } from 'emailjs-com';
import moment from 'moment';

const ViewInquiry = (props) => {
  const { id } = useParams();

  const [inquiry, setInquiry] = useState([]);

  useEffect(() => {
    console.log(id)
    let user = firebase.firestore().collection('BusinessInquires').doc(id);
    user.onSnapshot((querySnapShot) => {
      setInquiry(querySnapShot.data());
    });
  }, []);

  const reject = () => {
    firebase.firestore().collection('BusinessInquires').doc(id).delete();

    send(
      'service_fkli7rb',
      'template_ps655ab',
      {
        from_name: 'TableTop',
        to_name: 'Client',
        message: 'this is the website message',
        reply_to: inquiry.email,
      },
      'db9qm4jXT2AwGt4gs'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  const accept = async () => {
    let informationUser = await props.SignUp(inquiry.businessEmail, "abc123");
    let userId = informationUser.user.uid;

    const user = {
      accountType: "Business",
      firstName: inquiry.fName,
      lastName: inquiry.lName,
      email: inquiry.businessEmail,
      createdDate: moment().format("YYYY MM DD"),
      notficationSettings: {
        Activity: true,
        Chat: true,
        Location: true
      }
    }

    await firebase.firestore().collection("Users").doc(userId).set(user);

    send(
      'service_fkli7rb',
      'template_s1kkvj7',
      {
        from_name: 'TableTop',
        to_name: 'Client',
        message: `Your login email is ${inquiry.businessEmail} and your password is abc123`,
        reply_to: inquiry.email,
      },
      'db9qm4jXT2AwGt4gs'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  return (
    <>
      <div className='submition-preview'>
        <h4>Inquiry</h4>
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
      </div>
      <div className='action-button-form-btns'>
        <p>The information show ab</p>
        <div>
          <a><Link to="/dashboard/inquiries">Go Back</Link></a>
          <a><Link to="/dashboard/inquiries" onClick={reject}>Reject</Link></a>
          <a className="ghost-button-home"><Link to="/dashboard/inquiries" onClick={accept}>Accept</Link></a>
        </div>
      </div>
    </>
  );
}

export default ViewInquiry;