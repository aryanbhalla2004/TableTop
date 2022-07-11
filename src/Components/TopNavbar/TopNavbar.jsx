import styles from "../TopNavbar/TopNavbar.module.css";
import { VscBellDot } from "react-icons/vsc";
import { IoLogOutOutline } from "react-icons/io5";
import NavbarSearchForm from "../NavbarSearchForm/NavbarSearchForm";
import { useState, useEffect } from "react";
const TopNavbar = ({ sideBarStatus }) => {
  const [zIndex, setZIndex] = useState(1);
  return (
    <div className={styles["top_navbar"]}>
      <NavbarSearchForm />
      <div className={styles["right_nav_options"]}>
        <VscBellDot />
        <IoLogOutOutline />
        <div className={styles["line"]}></div>
        <img
          src="https://placekitten.com/200/300"
          alt="profile photo"
          className={styles["profile_img"]}
        />
        <div className={styles["name_and_role"]}>
          <div className={styles["username"]}>Grandpa Joe</div>
          <div className={styles["role"]}>Admin</div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
