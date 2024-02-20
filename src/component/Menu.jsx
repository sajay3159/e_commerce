import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Menu() {
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Jewelry & Accessories", href: "#jewelry-accessories" },
    { text: "Clothing & Shoes", href: "#clothing-shoes" },
    { text: "Home & Living", href: "#home-living" },
    { text: "Wedding & Party", href: "#wedding-party" },
    { text: "Toys & Entertainment", href: "#toys-entertainment" },
    { text: "Art & Collectibles", href: "#art-collectibles" },
    { text: "Craft Supplies & Tools", href: "#craft-supplies-tools" },
  ];

  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {menuItems.map((menuItem, index) => (
              <Nav.Link
                className="custom-nav-link"
                key={index}
                href={menuItem.href}
              >
                {menuItem.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
