import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './navbar.css';

export default class NavbarLink extends Component {
  render() {
    return (      
        <Navbar className="navigationBar" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="navbar_Brand_Name">
          Krunal Patel</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="navLink" to="/about">About Me</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navLink" to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navLink" to="/">Follow Me</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}