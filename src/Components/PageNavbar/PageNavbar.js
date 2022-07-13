import "../PageNavbar/PageNavbar.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import * as BiIcons from "react-icons/bi";
import { useState } from "react";

const PageNavbar = () => {
  const [profileDropdownState, setProfileDropdownState] = useState(false);
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <div className="navbar_container">
          <Link to="/" className="logo_wrapper navbar-brand">
            <div className="chair_icon">
              <BiIcons.BiChair />
            </div>
            <div className="company_name">TableTop</div>
          </Link>
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Link to="/vendor/2" className="nav-link last-link">
              Vendor
            </Link>
          </Nav>
          <div className="right_section_wrapper">
            <Button variant="light">Become Host</Button>
            <div className="globe">
              <i class="bi bi-globe2"></i>
            </div>
            <div
              className="user_profile_wrapper"
              onClick={() => setProfileDropdownState(!profileDropdownState)}
            >
              <i class="bi bi-list"></i>
              <i class="bi bi-person-circle"></i>
            </div>
          </div>
        </div>
        {profileDropdownState && (
          <Card>
            <ListGroup variant="flush">
              <Link
                className="list-group-item list-group-item-action"
                to="/home"
              >
                Sign up
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to="/home"
              >
                Log in
              </Link>
              <div className="line"></div>
              <Link
                className="list-group-item list-group-item-action"
                to="/home"
              >
                Help
              </Link>
            </ListGroup>
          </Card>
        )}
      </Navbar>
    </>
  );
};

export default PageNavbar;
