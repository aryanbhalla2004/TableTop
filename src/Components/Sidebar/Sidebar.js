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

import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <ProSidebar className="sidebar" collapsed={props.collapsedStatus}>
        <SidebarHeader className="sidebar_header">
          <BiIcons.BiMessage />
          <div
            className={
              props.collapsedStatus ? "company_name hide_name" : "company_name"
            }
          >
            TableTop
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem icon={<FaIcons.FaGem />}>
              <Link to={"home"} />
              Home
            </MenuItem>
            <MenuItem icon={<AiIcons.AiOutlineMessage />}>
              <Link to={"messages"} />
              Messages
            </MenuItem>
            <SubMenu title="Settings" icon={<FiIcons.FiSettings />}>
              <MenuItem>
                <Link to={"settings/account"} />
                Accounts
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
