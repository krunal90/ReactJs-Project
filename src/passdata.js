import  React, { Component } from 'react';

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
        <button onClick={this.changeLink}>Change</button>
        <p>{this.props.inputVal}</p>
      </div>
    );
  }
}