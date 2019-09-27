import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarLink from './navbar';
import './App.css';
import About from './uiComponents/aboutMe';
import Contact from './uiComponents/contact';
import Home from './uiComponents/Home';
import firebaseConfig from './uiComponents/firebase';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    var app = firebase.initializeApp(firebaseConfig);
    this.base = app.database().ref().child('personalDetails');
    this.state = {
      nameFirst: "Patel",
      val: "this is input value",
      krunalDetails: []
    }
  }

  componentDidMount(){
    this.base.on('value', snap => {
      this.setState({krunalDetails: snap.val()})
    })
  }
  render() {
    return (
      
        <Router>
          <div className="AppBody">
            <p>Hello {this.state.krunalDetails.firstName}</p>
            <NavbarLink />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </div>
        </Router>
      
      
    )
  }
}

export default App;
