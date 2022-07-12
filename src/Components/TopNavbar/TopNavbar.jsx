import "../TopNavbar/TopNavbar.css";

import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
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
          <i className="bi bi-app-indicator"></i>
          <i className="bi bi-inboxes"></i>
        </div>
        <div className="profile-info-wrapper">
          <img
            src="https://placekitten.com/200/300"
            alt="profile photo"
            className="profile_img"
          />
          <div className="name_and_role">
            <div className="username">Grandpa Joe</div>
            <div className="role">Regular Client</div>
          </div>
          <div
            className="drop-down-profile-aero"
            onClick={() => {
              setDropdownStatus(!dropdownStatus);
            }}
          >
            <i className="bi bi-chevron-down"></i>
            {dropdownStatus && <NavbarDropDown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
