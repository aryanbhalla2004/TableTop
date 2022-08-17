import "../TopNavbar/TopNavbar.css";

import { useState } from "react";
import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";

const TopNavbar = (props) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleClick = () => {
    console.log(props.collapsedStatus);
    props.setCollapsedStatus(!props.collapsedStatus);
  };

  return (
    <div className="top_navbar">
      <i className="bi bi-list hambergerMenuIcon" onClick={handleClick}></i>
      <div className="right_nav_options">
        <div className="user-action-nav-container">
          <i className="bi bi-app-indicator">
            <div className="message-content">
              <div className="message-box message-box--onhover">
                <div className="text">
                  <h5>TableTop</h5>
                  <p className="text-muted">Check out all the stores around you!</p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
              <div className="message-box message-box--onhover">
                <div className="text">
                  <h5>Target</h5>
                  <p className="text-muted">50% off all beach wear!</p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
            </div>
          </i>
          <i className="bi bi-inboxes">
            <div className="notification-content">
              <div className="notification-box notification-box--onhover">
                <img className="profile-image" src="https://placekitten.com/g/100/100" alt="" />
                <div className="text">
                  <h5>Abigail Garce</h5>
                  <p className="text-muted">Sorry I missed your call last night, maybe we can connect today?</p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
              <div className="notification-box notification-box--onhover">
                <img className="profile-image" src="https://placekitten.com/g/100/100" alt="" />
                <div className="text">
                  <h5>Tony Balogna</h5>
                  <p className="text-muted">Hows the weather</p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
              <div className="notification-box notification-box--onhover">
                <img className="profile-image" src="https://placekitten.com/g/100/100" alt="" />
                <div className="text">
                  <h5>Mike Joy</h5>
                  <p className="text-muted">Would love to meet up soon!</p>
                </div>
                <span className="time text-muted small">00:32</span>
              </div>
            </div>
          </i>
        </div>
        <div className="profile-info-wrapper">
          <img
            src="https://placekitten.com/200/300"
            alt="profile photo"
            className="profile_img"
          />
          <div className="name_and_role">
            <div className="username">{props.currentUserInfo && props.currentUserInfo.firstName} {props.currentUserInfo && props.currentUserInfo.lastName}</div>
            <div className="role">{props.currentUser && props.currentUser.email}</div>
          </div>
          <div className="drop-down-profile-aero">
            <i className="bi bi-chevron-down"></i>
            <div className="navbar-dropdown">
              <NavbarDropDown SetShowLogoutBox={props.setShowLogoutBox} Logout={props.logout}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;