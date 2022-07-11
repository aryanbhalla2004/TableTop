import { FiSearch } from "react-icons/fi";
import styles from "../NavbarSearchForm/NavbarSearchForm.module.css";
const NavbarSearchForm = () => {
  return (
    <form className={styles["search_form"]}>
      <input
        type="search"
        name="search"
        className="input"
        placeholder="Search..."
      />
      <FiSearch />
    </form>
  );
};

export default NavbarSearchForm;
