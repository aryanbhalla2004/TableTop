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
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsedStatus, setCollapsedStatus] = useState(false);
  const handleClickOnSideBar = (e) => {
    setCollapsedStatus(!collapsedStatus);
  };
  return (
    <>
      <ProSidebar className="sidebar" collapsed={collapsedStatus}>
        <SidebarHeader className="sidebar_header">
          <BiIcons.BiMessage />
          <div
            className={
              collapsedStatus ? "company_name hide_name" : "company_name"
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
            <SubMenu title="Favorite" icon={<FaIcons.FaHeart />}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="sidebar_footer">Footer</SidebarFooter>
      </ProSidebar>
      <AiIcons.AiOutlineRight
        className={
          collapsedStatus ? "right_arrow menu_close" : "right_arrow menu_open"
        }
        onClick={handleClickOnSideBar}
      />
    </>
  );
};
export default Sidebar;