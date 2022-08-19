import "../Sidebar/Sidebar.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  MenuItem,
  Menu,
  SubMenu,
} from "react-pro-sidebar";

import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const accountType = props.currentUserInfo && props.currentUserInfo.accountType;

  return (
    <>
      <ProSidebar className="sidebar" collapsed={props.collapsedStatus}>
        <SidebarHeader className="sidebar_header">
          <div className={!props.collapsedStatus ? "company_name hide_name" : "company_name"}><BiIcons.BiChair /></div>
          <div className={props.collapsedStatus ? "company_name hide_name text-company" : "company_name text-company"}><Link to={"../"}>TableTop</Link><MdIcons.MdOutlineClose onClick={() => props.setCollapsedStatus(!props.collapsedStatus)}/></div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem icon={<BsIcons.BsFillGridFill/>}>
              <Link to={"/dashboard"} />
              Dashboard
            </MenuItem>
            <MenuItem icon={<BsIcons.BsStarFill/>}>
              <Link to={"favorites"} />
              Favorites
            </MenuItem>
            {accountType !== "Admin" && 
            <MenuItem icon={<IoIcons.IoMdChatbubbles />}>
              <Link to={"messages"} />
              Messages
            </MenuItem>}

            { accountType === "Admin" ? 
              <>
                <MenuItem icon={<MdIcons.MdBusinessCenter />}>
                  <Link to={"businesses"} />
                  Businesses
                </MenuItem>
                <MenuItem icon={<BsIcons.BsQuestionLg />}>
                  <Link to={"inquiries"} />
                Inquiries
                </MenuItem>
              </> : <></> }

            { accountType === "Business" ? 
              <>
                <MenuItem icon={<BiIcons.BiGitBranch />}>
                  <Link to={"branches"} />
                  Branches
                </MenuItem>
              </> : <></> }

            <SubMenu title="Settings" icon={<BsIcons.BsFillGearFill />}>
              <MenuItem icon={<CgIcons.CgProfile />}>
                <Link to={"settings/profile"} />
                Profile
              </MenuItem>
              <MenuItem icon={<ImIcons.ImHome />}>
                <Link to={"settings/general"} />
                General
              </MenuItem>
              <MenuItem icon={<MdIcons.MdSecurity />}>
                <Link to={"settings/security"} />
                Security
              </MenuItem>
              <MenuItem icon={<FiIcons.FiActivity />}>
                <Link to={"settings/activity"} />
                Activity
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="sidebar_footer">
          <Menu>
            <MenuItem icon={<RiIcons.RiLogoutCircleRLine />} onClick={props.logout}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};
export default Sidebar;
