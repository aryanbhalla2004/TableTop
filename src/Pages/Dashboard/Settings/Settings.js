import { Link, Outlet } from "react-router-dom";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import "../Settings/Settings.css";

const Settings = () => {
  return (
    // <div>
    //   <h1>Settings</h1>
    //   <h2>Hi</h2>
    //   <Outlet />
    //   <Link to="/dashboard">Back</Link>
    // </div>

    /*
     <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

             <img
            src="https://placekitten.com/200/200"
            className="profile_img_editable"
          />
          <Button as="input" type="submit" value="Save" />
    */
    <Container className="form-wrapper-container">
      <Form>
        <div className="image-wrapper">
          <img
            src="https://placekitten.com/200/200"
            className="profile_img_editable"
          />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Upload Images</Form.Label>
            <Form.Control type="file" placeholder="Enter email" />
          </Form.Group>
        </div>
        <div className="name-input-wrapper">
          <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button as="input" type="submit" value="Save" className="save-btn" />
      </Form>
    </Container>
  );
};

export default Settings;
