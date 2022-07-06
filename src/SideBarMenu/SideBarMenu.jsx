import styles from "../SideBarMenu/SideBarMenu.module.css";
import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { BiMessage } from "react-icons/bi";
const SideBarMenu = () => {
  const [inputValue, setInputValue] = useState(false);
  const handleClickOnSlide = (e) => {
    setInputValue(!inputValue);
  };
  return (
    <>
      <div className={styles["toggle-menu"]} onClick={handleClickOnSlide}>
        <span
          className={styles["top_line"]}
          style={{
            transform: inputValue && "rotate(45deg)",
            top: inputValue && "2.5rem",
          }}
        ></span>
        <span
          className={styles["middle_line"]}
          style={{
            transform: inputValue && "rotate(-45deg)",
          }}
        ></span>
        <span
          className={styles["bottom_line"]}
          style={{
            display: inputValue && "none",
          }}
        ></span>
      </div>
      <div
        className={styles["slide"]}
        onClick={handleClickOnSlide}
        style={{ transform: inputValue && "translateX(0)" }}
      >
        <div
          className={styles["logo"]}
          style={{ display: inputValue && "flex" }}
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
      </div>
    </>
  );
};

export { SideBarMenu };
