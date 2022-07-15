import "../PageNavbar/PageNavbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Collapse from 'react-bootstrap/Collapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const PageNavbar = (props) => {
  return (
    <>
      <div className="header-container">
        <div className="content-sizing-box header-wrapper-style">
          <div className="connection-log-menu">
            <ul className="header-nav">
             <li><Link to="/home" className="nav-link">Home</Link></li>
             <li><Link to="/faq" className="nav-link">FAQ</Link></li>
             <li><Link to="/vendor/2" className="nav-link last-link">Support</Link></li>
            </ul>
          </div>
          
          {!props.CurrentUser &&
            <div className="right_section_wrapper">
              <div className="user_profile_wrapper">
                <Link to="/auth" className="circle-button-header login-button-header"><i class="bi bi-people"></i> <span>Sign in</span></Link>
              </div>
              <button variant="light">Become a Member&nbsp;<i class="bi bi-arrow-right"></i></button>
            </div>
          }
          
          {props.CurrentUser &&
            <div className="right_section_wrapper">
              <div className="user_profile_wrapper">
                <Link to="" className="circle-button-header login-button-header" aria-controls="navbar-dark-example"><i class="bi bi-people"></i> <span>{props.CurrentUser.email}</span><BiChevronDown/></Link>
              </div>
              <div className="login-button-noti-btn">
                <i className="bi bi-inboxes"></i>
                <BiChevronDown/>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default PageNavbar;
