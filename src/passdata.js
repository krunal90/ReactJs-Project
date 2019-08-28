import  React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Passdata extends Component {
  constructor(props) {
    super();
    this.state = {name: "This is new link"};
    this.changeLink = this.changeLink.bind(this);
  }

  changeLink() {
    this.props.changeName(this.state.name);
  }

  render() {
    return(
      <div>
        <Button onClick={this.changeLink} varient="flat" size="xxl">Change</Button>
        <p>{this.props.inputVal}</p>
      </div>
    );
  }
}