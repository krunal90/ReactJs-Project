import React, { Component } from 'react';
import Passdata from './passdata';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {name: "Home Link", val: "this is input value"}
    this.changeHomeLink = this.changeHomeLink.bind(this);
  }

  changeHomeLink(link) {
    this.setState({name: link});
  }

  changeInput() {
    this.setState({val: document.getElementById("inputVal").value});
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
         {this.state.name}
        </p>
        <input id="inputVal" type="text" />
        <button onClick={this.changeInput.bind(this)} >ChangeInput</button>
        <Passdata changeName={this.changeHomeLink} inputVal={this.state.val}/>
      </div>
    )
  }
}

export default App;
