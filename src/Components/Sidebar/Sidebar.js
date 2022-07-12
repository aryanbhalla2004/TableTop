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
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <ProSidebar className="sidebar" collapsed={props.collapsedStatus}>
        <SidebarHeader className="sidebar_header">
          <div className={!props.collapsedStatus ? "company_name hide_name" : "company_name"}><BiIcons.BiChair /></div>
          <div className={props.collapsedStatus ? "company_name hide_name" : "company_name"}>TableTop</div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem icon={<BsIcons.BsFillGridFill/>}>
              <Link to={"home"} />
              Dashboard
            </MenuItem>
            <MenuItem icon={<MdIcons.MdBusinessCenter />}>
              <Link to={"messages"} />
              Business
            </MenuItem>
            <MenuItem icon={<IoIcons.IoMdChatbubbles />}>
              <Link to={"messages"} />
              Messages
            </MenuItem>
            <SubMenu title="Settings" icon={<BsIcons.BsFillGearFill />}>
              <MenuItem icon={<CgIcons.CgProfile />}>
                <Link to={"settings/account"} />
                Profile
              </MenuItem>
              <MenuItem icon={<ImIcons.ImHome />}>
                <Link to={"settings/account"} />
                General
              </MenuItem>
              <MenuItem icon={<MdIcons.MdSecurity />}>
                <Link to={"settings/account"} />
                Security
              </MenuItem>
              <MenuItem icon={<FiIcons.FiActivity />}>
                <Link to={"settings/account"} />
                Activity
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="sidebar_footer">Footer</SidebarFooter>
      </ProSidebar>
    </>
  );
};
export default Sidebar;
