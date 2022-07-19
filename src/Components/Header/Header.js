import React from "react";
import { Link } from "react-router-dom";
import PageNavbar from "../PageNavbar/PageNavbar";

const Header = (props) => {
  return (
    // <>
    //   <h1>Header</h1>
    //   {props.CurrentUser && <Link to="" onClick={props.Logout}>Logout</Link>}
    //   <h4>{props.CurrentUser && props.CurrentUser.email}</h4>
    // </>
    <PageNavbar CurrentUser={props.CurrentUser} SetShowLogoutBox={props.SetShowLogoutBox}/>
  );
};

export default Header;
