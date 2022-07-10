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
    <div style={{ display: "flex" }}>
      <Sidebar></Sidebar>
      <div>
        <h1>Content</h1>
        You'll find the CSS styles used in Revindex Storefront follows closely
        the Bootstrap 3.x and DNN UX standard therefore making it very easy to
        style module elements simply by overriding the style rules in your
        portal CSS. Please see the video tutorial below on how to override
        styles from your portal CSS.
      </div>
    </div>
  );
};

export default Dashboard;
