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

import { FaGem, FaHeart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <ProSidebar className="sidebar">
      <SidebarHeader>TableTop</SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </ProSidebar>
  );
};
export default Sidebar;
