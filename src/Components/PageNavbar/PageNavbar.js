import "../PageNavbar/PageNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsFillGearFill, BsFillGridFill } from "react-icons/bs";
import logo from "../../util/images/logo2.png";

const PageNavbar = (props) => {
  const history = useNavigate();
  const [showNoti, setShowNoti] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="content-sizing-box header-wrapper-style">
        
        <div className="header-nav">
        <Link to="/"><img src={logo} width={75} className="logo-overflow"/></Link>
          <ul className="header-menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Support</Link></li>
          </ul>
          </div>
          {/* <div className="search-bar-header-container">
            <select name="cars" id="cars">
              <option value="volvo">All Categories</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <input placeholder="Search for local and nearby business information"/>
            <AiOutlineSearch className="search-icons"/>
          </div> */}

          

          {!props.CurrentUser &&
            <div className="right_section_wrapper">
              <div className="header-nav right-side-nav">
                <ul className="header-menu-list">
                  <li><Link to="/">Live Gallery</Link></li>
                </ul>
              </div>
              <button
                variant="light"
                onClick={() => props.SetShowAccountSelection(true)}
              >
                Create Account&nbsp;<i class="bi bi-arrow-right"></i>
              </button>
              <div className="user_profile_wrapper">
                <Link
                  to="/auth"
                  className="circle-button-header login-button-header"
                >
                  <span>Log In</span>
                </Link>
              </div>
              
            </div>
          }

          {props.CurrentUser && (
            <div className="right_section_wrapper">
              
              <Link to="/favorite" className="like-button-header">
                <i class="bi bi-heart"></i>
              </Link>
              <div className="login-button-noti-btn" onClick={() => {setShowNoti(!showNoti); setShowAccount(false);}}>
                <i className="bi bi-inboxes"></i>
                {/* <div className={showNoti ? "hover-notification-box show-box notification-box-front-end" : "hover-notification-box"}>
                  <div>
                    <span>Notification</span>
                    <Link to="">Mark all as read</Link>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <h5>Your order is placed</h5>
                        <p>if serveral languages coalesce the grammer</p>
                        <span>
                          <i class="bi bi-clock"></i> 3 min ago
                        </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h5>Your order is placed</h5>
                        <p>if serveral languages coalesce the grammer</p>
                        <span>
                          <i class="bi bi-clock"></i> 3 min ago
                        </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h5>Your order is placed</h5>
                        <p>if serveral languages coalesce the grammer</p>
                        <span>
                          <i class="bi bi-clock"></i> 3 min ago
                        </span>
                      </div>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="user_profile_wrapper">
                <div className="profile-Button-wrapper" maria-controls="navbar-dark-example" onClick={() => {setShowAccount(!showAccount); setShowNoti(false);}}>
                  <i class="bi bi-people"></i>
                  <div className={showAccount ? "hover-notification-box showProfileBox account-box" :  "hover-notification-box account-box"}>
                    <ul>
                      <li onClick={() => history("/dashboard")}>
                        <BsFillGridFill />
                        Dashboard
                      </li>
                      <li onClick={() => history("/dashboard/settings/profile")}>
                        <BsFillGearFill /> Settings
                      </li>
                      <li>
                        <AiOutlineUser /> Profile
                      </li>
                      <li onClick={() => props.SetShowLogoutBox(true)}>
                        <HiOutlineLogout /> Logout
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageNavbar;
