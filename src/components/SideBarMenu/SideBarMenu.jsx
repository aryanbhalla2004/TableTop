import styles from "../SideBarMenu/SideBarMenu.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { SideBarLink } from "../SideBarLink/SideBarLink";
const SideBarMenu = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const handleClickOnSlide = (e) => {
    setSideBarStatus(!sideBarStatus);
  };
  return (
    <>
      <div className={styles["toggle-menu"]} onClick={handleClickOnSlide}>
        <span
          className={styles["top_line"]}
          style={{
            transform: sideBarStatus && "rotate(45deg)",
            top: sideBarStatus && "2.5rem",
          }}
        ></span>
        <span
          className={styles["middle_line"]}
          style={{
            transform: sideBarStatus && "rotate(-45deg)",
          }}
        ></span>
        <span
          className={styles["bottom_line"]}
          style={{
            display: sideBarStatus && "none",
          }}
        ></span>
      </div>
      <div
        className={styles["slide"]}
        onClick={handleClickOnSlide}
        style={{ transform: sideBarStatus && "translateX(0)" }}
      >
        <div
          className={styles["logo"]}
          style={{ display: sideBarStatus && "flex" }}
        >
          <Link to="#">
            <BiMessage
              size="3.5rem"
              color="white"
              style={{ transform: "rotateY(180deg)" }}
            />
          </Link>

          <div className={styles["website-name"]}>
            <Link to="#">TableTop</Link>
          </div>
        </div>
        <div className={styles["sidebar_links"]}>
          <SideBarLink
            sidebarStatus={sideBarStatus}
            linkName={"Dashboard"}
            icon={<MdDashboard />}
          />
          <SideBarLink
            sidebarStatus={sideBarStatus}
            linkName={"Settings"}
            icon={<FiSettings />}
          />
        </div>
      </div>
    </>
  );
};

export { SideBarMenu };
