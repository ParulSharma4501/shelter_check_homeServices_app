import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar_home.styles.css";

import sclogo from "../../assets/sclogo.png";
import home from "../../assets/home.png";

const MyNavbar = () => (
  <div>
    <Navbar
      bg="white"
      expand="lg"
      className="navbar nav_home shadow-sm bg-white rounded"
    >
      <Navbar.Brand href="#home">
        <Link to="/" className="nav_home_brand">
        <img src={home} alt="" height="55" width="75"></img>
          <img src={sclogo} alt="" height="45" width="160"></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav.Link href="#" className="">
          <Link to="/professional" className="proff_text">
            {" "}
            Register as a professional
          </Link>
        </Nav.Link>
        <Nav.Link href="#">
          <Link to="/login" className="nav_home_link hover-underline-animation">
            Login
          </Link>
        </Nav.Link>
        <Nav.Link href="#">
          <Link
            to="/signup"
            className="nav_home_link hover-underline-animation"
          >
            Sign-Up
          </Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default MyNavbar;
