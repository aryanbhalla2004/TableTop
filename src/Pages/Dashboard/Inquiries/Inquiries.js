import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { useState } from 'react';
import {firebase} from "../../../util/Firebase";
import { useEffect } from 'react';
import { send } from 'emailjs-com';

const Inquiries = () => {
  const [inquires, setInquiries] = useState([]);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async (e) => {
    try {
      await firebase.firestore().collection("BusinessInquires").onSnapshot((querySnapshot) => {
        let tempList = [];
        querySnapshot.forEach((doc) => {
          tempList.push({data: doc.data(),id : doc.id});
        });
        setInquiries(tempList);
      });
    } catch(e) {
      console.log(e.message);
    }
  }

  const reject = (id) => {
    firebase.firestore().collection('BusinessInquires').doc(id).delete();

    send(
      'service_fkli7rb',
      'template_ps655ab',
      {
        from_name: 'TableTop',
        to_name: 'Client',
        message: 'this is the website message',
        reply_to: 'nicholashacaulttabs@gmail.com',
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
      <h1>Inquiries</h1>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>All Businesses</h2>
          </div>
          <table className='activity-table inquire-grid-table'>
            <thead>
              <th></th>
              <th>Vendor Name</th>
              <th>Vendor Email</th>
              <th>Business Name</th>
              <th>Business Category</th>
              <th></th>
            </thead>
            <tbody>
              {inquires.map((inquiry, i) =>  ( 
                  <tr>
                    <td><FaIcons.FaEnvelope/></td>
                    <td>{inquiry.data.fName} {inquiry.data.lName}</td>
                    {/* <td>{inquiry.data.phone}</td> */}
                    <td>{inquiry.data.businessEmail}</td>
                    <td>{inquiry.data.businessName}</td>
                    <td>{inquiry.data.businessType}</td>
                    <td>
                      <button className="mt-3 btn btn-primary btn-spacer"><Link to={`view-inquiry/${inquiry.id}`} className="signup-link"><i class="bi bi-binoculars"></i> View</Link></button>
                    </td>
                  </tr>
              ))}
              {/* <tr>
                <td><FaIcons.FaEnvelope/></td>
              <th>Actions</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td><FaIcons.FaEnvelope/> 1 day ago</td>
                <td>Jewels Richardson</td>
                <td>info@myhairplace.com</td>
                <td>My Hair Place</td>
                <td>Beauty</td>
                <td>1 day ago</td>
                <td>
                  <button className="mt-3 btn btn-primary">View</button>
                  <button className="mt-3 btn btn-primary">Reject</button>
                </td>
              </tr>
              <tr>
                <td><FaIcons.FaEnvelopeOpen/></td>
                <td>Rocky Veras</td>
                <td>+1 (204)-345-3575</td>
                <td>info@myworkoutplace.com</td>
                <td>My Workout Place</td>
                <td>Fitness</td>
                <td>2 days ago</td>
                <td>
                  <button className="mt-3 btn btn-primary">View</button>
                  <button className="mt-3 btn btn-primary">Reject</button>
                </td>
              </tr> 
                <td><button className="mt-3 btn btn-primary">View</button><button className="mt-3 btn btn-primary">Reject</button></td>
              </tr>*/}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Inquiries;
