import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
import "../Dashboard/Dashboard.css";
const Dashboard = () => {
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
        <Sidebar></Sidebar>
        <div className="navbar_container">
          <TopNavbar />
          <h1>Welcome, user</h1>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
