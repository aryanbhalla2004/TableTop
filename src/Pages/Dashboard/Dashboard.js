import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
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
    <Sidebar></Sidebar>
  );
};

export default Dashboard;
