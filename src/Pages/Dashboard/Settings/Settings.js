import { Link, Outlet } from "react-router-dom";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import "../Settings/Settings.css";

const Settings = () => {
  return (
  <>
    <ul className="list-selection-settings">
      <li><a>Profile</a></li>
      <li><a>General</a></li>
      <li><a>Security</a></li>
      <li><a>Activity</a></li>
    </ul>
    <div className="box-container">
      <div className="profile-box">
        <div className="profile-icon"><FaIcons.FaUserCircle/></div>
        <h3>Welcome, Aryan bhalla</h3>
        <p>Looks like your not verifed yet, Verify your account to full potential of TableTop</p>
        <div className="Verified-Status border-bottom">
          <BsIcons.BsFillCheckCircleFill/>
          <p>Verified Account</p>
        </div>
      </div>
      <div className="profile-box">
        <h2>Download App</h2>
        <h3>Get Our Mobile App</h3>
        <p>Verifying your identity on our mobile app more secure, faster, and reliable.</p>
        <div className="Verified-Status">

        </div>
        <div className="Verified-Status">

        </div>
      </div>
    </div>
  </>
    // <Container className="form-wrapper-container">
    //   <Form>
    //     <div className="image-wrapper">
    //       <img
    //         src="https://placekitten.com/200/200"
    //         className="profile_img_editable"
    //       />
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Upload Images</Form.Label>
    //         <Form.Control type="file" placeholder="Enter email" />
    //       </Form.Group>
    //     </div>
    //     <div className="name-input-wrapper">
    //       <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email" />
    //         <Form.Text className="text-muted">
    //           We'll never share your email with anyone else.
    //         </Form.Text>
    //       </Form.Group>
    //       <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email" />
    //         <Form.Text className="text-muted">
    //           We'll never share your email with anyone else.
    //         </Form.Text>
    //       </Form.Group>
    //     </div>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="email" placeholder="Enter email" />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>
    //     <Button as="input" type="submit" value="Save" className="save-btn" />
    //   </Form>
    // </Container>
  );
};

export default Settings;
