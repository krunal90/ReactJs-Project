import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './navbar.css';

export default class NavbarLink extends Component {

  render() {
    return (      
        <Navbar className="navigationBar" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link className="navbar_Brand_Name" to="/">Krunal Patel</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="navLink" to="/about">About Me</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navLink" to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="navLink" to="/follow">Follow Me</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}