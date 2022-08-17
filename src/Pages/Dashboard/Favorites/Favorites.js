import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

const Favorites = () => {
  return (
    <>
      <h1>Favorites</h1>
      <div className="box-container">
        <div className="profile-box wd-100">
          <table className='activity-table'>
            <thead>
              <th>Business</th>
              <th>Address</th>
              <th>Hours</th>
              <th>Number</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>My Burger Place</td>
                <td>R3T-1P4 Winnipeg MB, Canada</td>
                <td>9:00 AM - 12:00 PM</td>
                <td>+1 (204)-213-3433</td>
                <td>
                  <button className="mt-3 btn btn-primary btn-spacer"><Link to={"/vendor/2"} className="signup-link">View</Link></button>
                  <button className="mt-3 btn btn-primary btn-spacer">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Favorites;
