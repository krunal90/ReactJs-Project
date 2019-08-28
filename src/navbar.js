import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './navbar.css';

export default class NavbarLink extends Component {
  render() {
    return (
        <Navbar className="navigationBar" bg="dark" variant="dark">
          <Navbar.Brand href="javascript:void(0')" className="navbar_Brand_Name">Krunal Patel</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#aboutMe" active>About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#follow">Follow Me</Nav.Link>
          </Nav>
        </Navbar>
    )
  }
}