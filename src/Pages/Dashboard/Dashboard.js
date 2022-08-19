import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import {firebase} from "../../util/Firebase";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import DashboardHeading from "../../Components/DashboardHeading/DashboardHeading";
import "../Dashboard/Dashboard.css";
import LogoutPage from './../../Components/Logout/Logout';

const Dashboard = (props) => {
  const [collapsedStatus, setCollapsedStatus] = useState(true);
  const [currentUserInfo, setCurrentUserInfo] = useState();
  const [showLogoutBox, setShowLogoutBox] = useState(false);

  useEffect(() => {
    let user = firebase.firestore().collection('Users').doc(props.currentUser.uid);
    user.onSnapshot((querySnapShot) => {
      setCurrentUserInfo(querySnapShot.data());
    });
  }, [props.currentUser]);

  return (
    // <div>
    // 	<h1>Dashboard</h1>
    // 	<p><Link to="/dashboard/home">Home</Link></p>
    // 	<p><Link to="/dashboard/messages">Messages</Link></p>
    // 	<p><Link to="/dashboard/notifications">Notifications</Link></p>
    // 	<p><Link to="/dashboard/settings">Settings</Link></p>
    // 	<p><Link to="/dashboard/favorite">Favorite</Link></p>
    // 	<p><Link to="/dashboard/business/profile">Profile</Link></p>
    // 	<Outlet />
    // </div>
    <>
      <div className="sidebar_container">
        <Sidebar collapsedStatus={collapsedStatus} setCollapsedStatus={setCollapsedStatus} currentUserInfo={currentUserInfo} logout={props.Logout}/>
        <div className="navbar_container">
          <TopNavbar
            setCollapsedStatus={setCollapsedStatus}
            collapsedStatus={collapsedStatus}
            currentUser = {props.currentUser}
            currentUserInfo={currentUserInfo}
            setShowLogoutBox={setShowLogoutBox}
            logout={props.Logout}
          />
          <div className="dashboard-container">
            <Outlet context={[props.currentUser, currentUserInfo]}/>
            {/* {console.log(showLogoutBox)}
            {console.log(props.Logout)}
            {console.log(setShowLogoutBox)} */}
            <LogoutPage ShowLogoutBox={showLogoutBox} Logout={props.Logout} SetShowLogoutBox={setShowLogoutBox}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
