import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <BootstrapNavbar
      expand="lg"
      bg="white"
      variant="light"
      className="py-3 shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img src="/images/logo.png" alt="Logo" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
        <BootstrapNavbar.Collapse id="navbarSupportedContent">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShopify} />
              <span className="ms-2"> Cart</span>
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
