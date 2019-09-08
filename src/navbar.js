import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './navbar.css';

export default class NavbarLink extends Component {
  render() {
    return (
        <Navbar className="navigationBar" bg="dark" variant="dark">
        <Navbar.Brand className="navbar_Brand_Name">
          <Link className="navBrandLink" to="/">Krunal Patel</Link>
          </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navLink" to="/about">About Me</Link>
          <Link className="navLink" to="/contact">Contact</Link>
          <Link className="navLink" to="/">Follow Me</Link>
        </Nav>
      </Navbar>
    )
  }
}