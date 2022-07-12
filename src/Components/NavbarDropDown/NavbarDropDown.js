import "../NavbarDropDown/NavbarDropDown.css";
const NavbarDropDown = () => {
  return (
    <div className="dropdown_wrapper">
      <div className="dropdown_option profile_info_wrapper">
        <i className="bi bi-person-circle"></i>

        <div className="name_and_email_wrapper">
          <div className="username">Grandpa Joe</div>
          <div className="email">kitten@gmail.com</div>
        </div>
      </div>
      <div className="dropdown_option settings_wrapper">
        <i class="bi bi-gear-fill"></i>
        <div className="settings">Settings</div>
      </div>
      <div className="dropdown_option logout_wrapper last">
        <i class="bi bi-box-arrow-right"></i>
        <div className="logout">Logout</div>
      </div>
    </div>
  );
};

export default NavbarDropDown;
