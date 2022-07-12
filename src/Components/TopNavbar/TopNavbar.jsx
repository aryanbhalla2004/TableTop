import "../TopNavbar/TopNavbar.css";
import { VscBellDot } from "react-icons/vsc";
import { IoLogOutOutline } from "react-icons/io5";
import NavbarSearchForm from "../NavbarSearchForm/NavbarSearchForm";
import { useState, useEffect } from "react";

const TopNavbar = (props) => {
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
            <div className="role">Admin</div>
          </div>
          <div className="drop-down-profile-aero">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
