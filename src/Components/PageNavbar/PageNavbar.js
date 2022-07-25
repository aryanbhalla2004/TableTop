import "../PageNavbar/PageNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillGearFill, BsFillGridFill } from "react-icons/bs";
import logo from "../../util/images/logo.png";

const PageNavbar = (props) => {
  const history = useNavigate();
  const [showNoti, setShowNoti] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

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
          <Link to="/"><img src={logo} width={70}/></Link>
          
          {!props.CurrentUser &&
            <div className="right_section_wrapper">
              <div className="user_profile_wrapper">
                <Link to="/auth" className="circle-button-header login-button-header"><i class="bi bi-people"></i> <span>Sign in</span></Link>
              </div>
             <button variant="light" onClick={() => props.SetShowAccountSelection(true)}>Become a Member&nbsp;<i class="bi bi-arrow-right"></i></button>
            </div>
          }
          
          {props.CurrentUser &&
            <div className="right_section_wrapper">
              <div className="user_profile_wrapper">
                <div className="circle-button-header login-button-header" aria-controls="navbar-dark-example" onClick={() => {setShowAccount(!showAccount);  setShowNoti(false)}}><i class="bi bi-people"></i> <span>{props.CurrentUser.email}</span><BiChevronDown/>
                  <div className={showAccount ? "hover-notification-box show-box account-box" : "hover-notification-box account-box"}>
                    <ul>
                      <li onClick={() => history("/dashboard")}><BsFillGridFill/>Dashboard</li>
                      <li onClick={() => history("/dashboard/settings/profile")}><BsFillGearFill/> Settings</li>
                      <li><AiOutlineUser /> Profile</li>
                      <li onClick={() => props.SetShowLogoutBox(true)}><HiOutlineLogout/> Logout</li>
                    </ul>
                  </div> 
                </div>
              </div>
              <div className="login-button-noti-btn" onClick={() => {setShowNoti(!showNoti);  setShowAccount(false)}}>
                <i className="bi bi-inboxes"></i>
                <BiChevronDown/>
                <div className={showNoti ? "hover-notification-box show-box notification-box-front-end" : "hover-notification-box" }>
                  <div>
                    <span>Notification</span>
                    <Link to="">Mark all as read</Link>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <h5>Your order is placed</h5>
                        <p>if serveral languages coalesce the grammer</p>
                        <span><i class="bi bi-clock"></i> 3 min ago</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h5>Your order is placed</h5>
                        <p>if serveral languages coalesce the grammer</p>
                        <span><i class="bi bi-clock"></i> 3 min ago</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h5>Your order is placed</h5>
                        <p>if serveral languages coalesce the grammer</p>
                        <span><i class="bi bi-clock"></i> 3 min ago</span>
                      </div>
                    </li>
                  </ul>
                </div>  
              </div>
              <i className="bi bi-inboxes"></i>
            </div>
            
          }
        </div>
      </div>
    </>
  );
};

export default PageNavbar;
