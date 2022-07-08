import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../SideBarLink/SideBarLink.module.css";
const SideBarLink = ({ sidebarStatus, linkName, icon }) => {
  console.log(icon);
  const [hover, setHover] = useState(false);
  const handleMouseOverOnLink = (e) => {
    setHover(true);
  };
  const handleMouseOutOnLink = (e) => {
    setHover(false);
  };
  return (
    <Link
      to={"/"}
      className={style["link"]}
      onMouseOver={handleMouseOverOnLink}
      onMouseOut={handleMouseOutOnLink}
      style={{
        backgroundColor: hover ? "#FFB35F" : "#191e3a",
        transition: "all 0.2s ease",
        borderTopRightRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
    >
      {/* clone the svg element and update the props dynamically */}
      {React.cloneElement(icon, {
        style: {
          position: sidebarStatus ? "static" : "absolute",
          color: hover ? "black" : "#4a58a6",
        },
      })}
      <div
        className={style["link_name"]}
        style={{ color: hover ? "black" : "#a9abb6" }}
      >
        {linkName}
      </div>
    </Link>
  );
};

export { SideBarLink };
