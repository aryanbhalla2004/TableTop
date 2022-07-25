import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Inquiries = () => {
  return (
    <>
      <h1>Inquiries</h1>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>All Businesses</h2>
          </div>
          <table className='activity-table'>
            <thead>
              <th></th>
              <th>Vendor Name</th>
              <th>Vendor Phone</th>
              <th>Vendor Email</th>
              <th>Business Name</th>
              <th>Business Category</th>
              <th>Date</th>
              <th>Actions</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td><FaIcons.FaEnvelope/></td>
                <td>Jewels Richardson</td>
                <td>+1 (204)-213-3433</td>
                <td>info@myhairplace.com</td>
                <td>My Hair Place</td>
                <td>Beauty</td>
                <td>1 day ago</td>
                <td><button className="mt-3 btn btn-primary">View</button></td>
                <td><button className="mt-3 btn btn-primary">Reject</button></td>
              </tr>
              <tr>
                <td><FaIcons.FaEnvelopeOpen/></td>
                <td>Rocky Veras</td>
                <td>+1 (204)-345-3575</td>
                <td>info@myworkoutplace.com</td>
                <td>My Workout Place</td>
                <td>Fitness</td>
                <td>2 days ago</td>
                <td><button className="mt-3 btn btn-primary">View</button></td>
                <td><button className="mt-3 btn btn-primary">Reject</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Inquiries;
