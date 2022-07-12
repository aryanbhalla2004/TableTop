import { Link, Outlet } from "react-router-dom";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import "../Settings/Settings.css";

const Settings = () => {
  
  return (
    <>
      <ul className="list-selection-settings">
        <li><Link to="/dashboard/settings/profile">Profile</Link></li>
        <li><Link to="/dashboard/settings/general">General</Link></li>
        <li><Link to="/dashboard/settings/security">Security</Link></li>
        <li><Link to="/dashboard/settings/activity">Activity</Link></li>
      </ul>
      <Outlet/>
    </>
  );
};

export default Settings;
