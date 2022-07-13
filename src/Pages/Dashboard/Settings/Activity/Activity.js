import { Button } from 'react-bootstrap';
import React from 'react'
import "./Activity.css";
import { motion } from "framer-motion";
const Activity = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>Failed Attempts</h2>
            <p>Recent activity on your account were fail attempts.</p>
          </div>
          <table className='activity-table'>
            <thead>
              <th>Action</th>
              <th>When</th>
              <th>Location</th>
              <th>IP Address</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Login</td>
                <td>1 day ago</td>
                <td>Canada</td>
                <td>123.232.232.2</td>
                <td><Button className="btn-danger">Block IP</Button></td>
              </tr>
              <tr>
                <td>Login</td>
                <td>1 day ago</td>  
                <td>Canada</td>
                <td>123.232.232.2</td>
                <td><Button className="btn-danger">Block IP</Button></td>
              </tr>
              <tr>
                <td>Login</td>
                <td>1 day ago</td>  
                <td>Canada</td>
                <td>123.232.232.2</td>
                <td><Button className="btn-danger">Block IP</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>Account Activity</h2>
            <p>Recent activity on your account.</p>
          </div>
          <table className='activity-table'>
            <thead>
              <th>Action</th>
              <th>Source</th>
              <th>Browser</th>
              <th>IP Address</th>
              <th>Location</th>
              <th>When</th>
            </thead>
            <tbody>
              <tr>
                <td>Login</td>
                <td>Website</td>
                <td>Chrome (Windows)</td>
                <td>123.232.232.2</td>
                <td>Canada</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>Sign out</td>
                <td>Website</td>
                <td>Chrome (Windows)</td>
                <td>123.232.232.2</td>
                <td>Canada</td>
                <td>1 day ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

export default Activity;