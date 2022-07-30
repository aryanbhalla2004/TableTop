import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

const Businesses = () => {
  return (
    <>
      <h1>Businesses</h1>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>All Businesses</h2>
          </div>
          <table className='activity-table'>
            <thead>
              <th>Business</th>
              <th>Category</th>
              <th>Address</th>
              <th>Rating</th>
              <th>Email</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>My Burger Place</td>
                <td>Restarunt</td>
                <td>R3T-1P4 Winnipeg MB, Canada</td>
                <td><BsIcons.BsStarFill/> 4.5</td>
                <td>info@myburgerplace.com</td>
                <td><button className="mt-3 btn btn-primary">View</button> <button className="mt-3 btn btn-primary">Modify</button></td>
              </tr>
 
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Businesses;
