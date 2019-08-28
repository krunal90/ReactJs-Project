import React, { Component } from 'react';
import NavbarLink from './navbar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {nameFirst: "Krunal", val: "this is input value"}
  }

  render() {
    return (
      <div className="AppBody">
        <NavbarLink />
      </div>
    )
  }
}

export default App;
