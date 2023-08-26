import React from "react";
import { Badge, Nav, Navbar, Container } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  console.log(cartItems);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="PuneetLORD" />
              PuneetLORD
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-bar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <LinkContainer to="/login">
                <Nav.Link className="px-3">
                  User
                  <FaUser />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Cart">
                <Nav.Link className="px-3">
                  Cart
                  <FaShoppingCart />
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ margin: "5px" }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
