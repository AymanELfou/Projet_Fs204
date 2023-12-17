import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './Navbar.css'

function NavBar() {
  const state = useSelector((state) => state.handlecart);

  return (
    <Navbar expand="lg" className="py-3 custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          Custom<span style={{color:"green"}}>er</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="buttons ms-auto">
            <NavLink to="/cart" className="btn btn-outline-danger ms-2">
              <span className="fa fa-shopping-cart me-1"></span> Cart (
              {state.length})
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
