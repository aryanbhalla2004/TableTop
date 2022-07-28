import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

const Favorites = () => {
  return (
    <>
      <h1>Favorites</h1>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>Liked Businesses</h2>
          </div>
          <table className='activity-table'>
            <thead>
              <th>Business</th>
              <th>Category</th>
              <th>Address</th>
              <th>Rating</th>
              <th>Hours</th>
              <th>Number</th>
              <th>Email</th>
              <th>Actions</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>My Burger Place</td>
                <td>Restarunt</td>
                <td>R3T-1P4 Winnipeg MB, Canada</td>
                <td><BsIcons.BsStarFill/> 4.5</td>
                <td>9:00 AM - 12:00 PM</td>
                <td>+1 (204)-213-3433</td>
                <td>info@myburgerplace.com</td>
                <td><button className="mt-3 btn btn-primary">View</button></td>
                <td><button className="mt-3 btn btn-primary">Remove</button></td>
              </tr>
              <tr>
                <td>My Tire Place</td>
                <td>Auto</td>
                <td>R6P-3D5 Winnipeg MB, Canada</td>
                <td><BsIcons.BsStarFill/> 4.2</td>
                <td>7:00 am - 5:00 pm</td>
                <td>+1 (204)-345-3575</td>
                <td>info@mytireplace.com</td>
                <td><button className="mt-3 btn btn-primary">View</button></td>
                <td><button className="mt-3 btn btn-primary">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Favorites;
