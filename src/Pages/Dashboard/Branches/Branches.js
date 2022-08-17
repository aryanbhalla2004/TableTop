import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";

const Branches = () => {
  const burstActive = false;
  const expireTime = "00:00";
  
  return (
    <>
      <h1>Your Businesses</h1>
			<div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>All Businesses</h2>
						<button className="mt-3 btn btn-primary"><Link to="add-business" className="signup-link">Add Business</Link></button>
          </div>
          <table className='activity-table'>
            <thead>
              <th>Business</th>
              <th>Address</th>
              <th>Burst</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>My Tire Place</td>
                <td>R6P-3D5 Winnipeg MB, Canada</td>
                <td>
                  <button className="mt-3 btn btn-primary btn-spacer" disabled={burstActive}>Post Burst</button>
                  <p>expires in: {expireTime}</p>
                </td>
                <td>
                  <button className="mt-3 btn btn-primary btn-spacer"><Link to={"/vendor/2"} className="signup-link">View</Link></button>
                  <button className="mt-3 btn btn-primary">Modify</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Branches;
