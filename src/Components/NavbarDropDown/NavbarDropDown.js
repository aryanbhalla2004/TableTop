import "../NavbarDropDown/NavbarDropDown.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import { Link } from 'react-router-dom';

const NavbarDropDown = (props) => {
  const click = () => {
    props.SetShowLogoutBox(true);
  }

  return (
    <div className="dropdown_wrapper">
      <div className="dropdown_option settings_wrapper">
        <BsIcons.BsFillGearFill />
        <Link to={"settings/profile"}><div className="settings">Settings</div></Link>
      </div>
      <div className="dropdown_option settings_wrapper">
        <FiIcons.FiActivity />
        <Link to={"../dashboard"}><div className="settings">Activity</div></Link>
      </div>
      <div className="dropdown_option logout_wrapper last">
        <RiIcons.RiLogoutCircleRLine />
        <div className="logout" onClick={props.Logout}>Logout</div>
      </div>
    </div>
  );
};

export default NavbarDropDown;
