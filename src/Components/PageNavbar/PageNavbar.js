import "../PageNavbar/PageNavbar.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import * as BiIcons from "react-icons/bi";

const PageNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="navbar_container">
        <Navbar.Brand href="#home" className="logo_wrapper">
          <div className="chair_icon">
            <BiIcons.BiChair />
          </div>
          <div className="company_name">TableTop</div>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/vendor/2">Vendor</Nav.Link>
        </Nav>
        <div className="buttons">
          <Button variant="dark">Sign In</Button>
          <Button variant="light">Get Started</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default PageNavbar;
