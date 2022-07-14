import { Link, Outlet, useLocation, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardHeading from "../../../Components/DashboardHeading/DashboardHeading";
import "../Settings/Settings.css";

const Settings = () => {
  const [currentUser, currentUserInfo] = useOutletContext();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/").splice(1);
  const currentLocation = pathnameArray[pathnameArray.length - 1];

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <DashboardHeading name="Settings"/>
      <ul className="list-selection-settings">
        <li><Link to="/dashboard/settings/profile" className={currentLocation == "profile" && "active-button-setting"}>Profile</Link></li>
        <li><Link to="/dashboard/settings/general" className={currentLocation == "general" && "active-button-setting"}>General</Link></li>
        <li><Link to="/dashboard/settings/security" className={currentLocation == "security" && "active-button-setting"}>Security</Link></li>
        <li><Link to="/dashboard/settings/activity" className={currentLocation == "activity" && "active-button-setting"}>Activity</Link></li>
      </ul>
      <Outlet context={[currentUser, currentUserInfo]}/>
    </motion.div>
  );
};

export default Settings;
