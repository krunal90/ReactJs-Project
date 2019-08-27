import React, { Component } from 'react';
import Passdata from './passdata';
import './App.css';

function Time() {
  var hours = new Date().getHours();
  var timeLaps = '';
  if(hours >= 1 && hours <12) {
    timeLaps = "Good Morning!";
  } else if(hours >= 12 && hours < 16) {
    timeLaps ="Good Afternoon!";
  } else {
    timeLaps = "Good Evening!"
  }
  return (<span>{timeLaps}</span>);
}
setInterval(Time, 1000);

class App extends Component {
  constructor() {
    super();
    this.state = {name: "Krunal", val: "this is input value"}
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
          <h1>Welcome {this.state.name} <Time /> </h1>
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
