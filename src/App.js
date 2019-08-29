import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarLink from './navbar';
import './App.css';
import About from './uiComponents/aboutMe';
import Contact from './uiComponents/contact';

class App extends Component {
  constructor() {
    super();
    this.state = {nameFirst: "Krunal", val: "this is input value"}
  }

  render() {
    return (
      
        <Router>
          <div className="AppBody">
            <NavbarLink />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </div>
        </Router>
      
      
    )
  }
}

export default App;
