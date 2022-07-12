import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Button} from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <div className="box-container">
        <div className="profile-box">
          <div className="profile-icon"><FaIcons.FaUserCircle/></div>
          <h3>Welcome, Aryan Bhalla</h3>
          <p>Looks like your not verified yet, Verify your account to full potential of TableTop</p>
          <div className="Verified-Status border-bottom">
            <BsIcons.BsFillCheckCircleFill/>
            <p>Verified To Full Potential</p>
          </div>
        </div>
        <div className="profile-box">
          <h2>Download App</h2>
          <h3>Get Our Mobile App</h3>
          <p>Verifying your identity on our mobile app more secure, faster, and reliable.</p>
          <div className="download-btn-holder">
            <a className="download-Buttons"><DiIcons.DiAndroid/> <span><p>GET IT ON</p><h5>Google Play</h5></span></a>
            <a className="download-Buttons"><AiIcons.AiFillApple/> <span><p>DOWNLOAD ON THE</p><h5>App Store</h5></span></a>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="profile-box wd-90">
          <h2>Upgrade</h2>
          <h3>Account Type: Regular</h3>
          <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.</p>
          <Button className="mt-3">Upgrade to Business</Button>
        </div>
        <div className="profile-box">
          <h2>Verify</h2>
          <h3>Account Status: Verified</h3>
          <p>Your account in verified and secured from potential threats</p>
          <Button className="mt-3" disabled>Get Verified</Button>
        </div>
      </div>
      <div className="box-container">
        <div className="profile-box wd-100">
          <div className="header-profile-box">
            <h2>Information</h2>
            <Button>Edit</Button>
          </div>
          <ul className="user-information-setting-panel">
            <li>
              <span>user id</span>
              <h5>3QWHDQ781238ASDI</h5>
            </li>
            <li>
              <span>First Name</span>
              <h5>Aryan</h5>
            </li>
            <li>
              <span>Last Name</span>
              <h5>Bhalla</h5>
            </li>
            <li>
              <span>Email</span>
              <h5>aryanbhalla66@gmail.com</h5>
            </li>
            <li>
              <span>Type</span>
              <h5>Regular</h5>
            </li>
            <li>
              <span>Joined Since</span>
              <h5>2022/03/06</h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile;