import "../NavbarDropDown/NavbarDropDown.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";

const NavbarDropDown = () => {
  return (
    <div className="dropdown_wrapper">
      <div className="dropdown_option settings_wrapper">
        <BsIcons.BsFillGearFill />
        <div className="settings">Settings</div>
      </div>
      <div className="dropdown_option settings_wrapper">
        <FiIcons.FiActivity />
        <div className="settings">Activity</div>
      </div>
      <div className="dropdown_option logout_wrapper last">
        <RiIcons.RiLogoutCircleRLine />
        <div className="logout">Logout</div>
      </div>
    </div>
  );
};

export default NavbarDropDown;
