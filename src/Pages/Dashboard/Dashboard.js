import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import DashboardHeading from "../../Components/DashboardHeading/DashboardHeading";
import "../Dashboard/Dashboard.css";
const Dashboard = () => {
  const [collapsedStatus, setCollapsedStatus] = useState(true);
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
        <Sidebar collapsedStatus={collapsedStatus} setCollapsedStatus={setCollapsedStatus}></Sidebar>
        <div className="navbar_container">
          <TopNavbar
            setCollapsedStatus={setCollapsedStatus}
            collapsedStatus={collapsedStatus}
          />
          <div className="dashboard-container">
            <DashboardHeading />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
