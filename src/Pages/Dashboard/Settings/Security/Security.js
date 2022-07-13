import React from 'react'
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const Security = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>Password Change</h2>
            <Button>Change Password</Button>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder="********" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <div className="name-input-wrapper">
              <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="********" disabled/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                <Form.Label>Re-Password</Form.Label>
                <Form.Control type="password" placeholder="********" disabled/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    </motion.div>
  )
}

export default Security;