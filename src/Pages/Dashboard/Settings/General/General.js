import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import { db } from '../../../../util/Firebase';
import "./General.css";
import { motion } from "framer-motion";

const General = () => {
  const [currentUser, currentUserInfo] = useOutletContext();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    setUserInfo(currentUserInfo)
  }, [currentUserInfo]);

  const updateNotification = async (type) => {
    console.log(type);
    setUserInfo(prevInput => ({
      ...prevInput, notficationSettings: {...userInfo.notficationSettings, [type]: !userInfo.notficationSettings[type]}
    }));


  }
 
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>Profile Information</h2>
            <Button>Save Changes</Button>
          </div>
        <Form>
          <div className="name-input-wrapper">
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="email" placeholder={currentUserInfo && currentUserInfo.firstName} value={userInfo && userInfo.firstName}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" placeholder={currentUserInfo && currentUserInfo.lastName} value={userInfo && userInfo.lastName}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
          <div className="name-input-wrapper">
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="" value={currentUser && currentUser.email} disabled/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>User Id</Form.Label>
              <Form.Control type="email" value={currentUser && currentUser.uid} disabled/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
        </Form>
      </div>
      </div>
      <div className="box-container">
        <div className="profile-box">
          <div className="header-profile-box">
            <h2>Notification Setting</h2>
          </div>
          <ul className='notification-settings'>
            <li>
              <div>
                <span>Chat Notification</span>
                <p>This setting will enable or disable chat notification throught browser</p>
              </div>
              <label class="switch">
                <input type="checkbox" checked={userInfo && userInfo.notficationSettings.Chat} onClick={() => updateNotification("Chat")}/>
                <span class="slider round"></span>
              </label>
            </li>
            <li>
              <div>
                <span>Account Activity</span>
                <p>This setting will enable or disable your account activity</p>
              </div>
              <label class="switch">
                <input type="checkbox" checked={userInfo && userInfo.notficationSettings.Activity} onClick={() => updateNotification("Activity")}/>
                <span class="slider round"></span>
              </label>
            </li>
            <li>
              <div>
                <span>Location</span>
                <p>Location if enable will be used to find location around your area.</p>
              </div>
              <label class="switch">
                <input type="checkbox" checked={userInfo && userInfo.notficationSettings.Location} onClick={() => updateNotification("Location")}/>
                <span class="slider round"></span>
              </label>
            </li>
          </ul>
        </div>
        <div className="profile-box">
          <h2>Delete Account</h2>
          <h3>You will permanently lose your data!</h3>
          <p>The modification cannot be undone once the delete button has been pressed. take a moment before selecting "Delete"</p>
          <Button className="mt-3 btn-danger">Delete Permanently</Button>
        </div>
      </div>
    </motion.div>
  )
}

export default General;