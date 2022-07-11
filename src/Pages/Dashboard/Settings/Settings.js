import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Settings/Settings.css";

const Settings = () => {
  return (
    // <div>
    //   <h1>Settings</h1>
    //   <h2>Hi</h2>
    //   <Outlet />
    //   <Link to="/dashboard">Back</Link>
    // </div>
    <div className="account_container">
      <img
        src="https://placekitten.com/200/300"
        alt="profile photo"
        className="profile_photo"
      />
      <form className="account_form">
        <div className="input_fields_container">
          <div className="name_container">
            <div className="input_field">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="input_field">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="email_contact_container">
            <div className="input_field">
              <label>Contact-Number</label>
              <input type="text" />
            </div>
            <div className="input_field">
              <label>Email</label>
              <input type="text" />
            </div>
          </div>
          <div className="input_field">
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
        <Button className="save_btn">Save</Button>
      </form>
    </div>
  );
};

export default Settings;
