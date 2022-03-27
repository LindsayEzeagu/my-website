import { Navbar, Nav, Container, Brand, Toggle, Collapse } from 'react-bootstrap';
import React from "react";
import logo from "../../images/logo.png";
import "./styles.css";

const Header = () => { return (<div>
  <Navbar variant="dark" expand="lg">
  <Container>
  <Navbar.Brand href="#homeD">
        <img
          alt="Logo"
          src={logo}
          className="d-inline-block align-top"
          id="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="/home">Home</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/journey">Journey</Nav.Link>
    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    <Nav.Link href="/contact">Contact Me</Nav.Link>

  </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>);};



export default Header;
/* <div><a href="/">Home</a> <a href="./about">About Me</a> <a href="./portfolio">My Portfolio</a> <a href="./journey">My Journey</a> <a href="./contact">Contact Me</a></div>*/