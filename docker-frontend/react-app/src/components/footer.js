import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
      <footer className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Some text here</p>
      </footer>
    );
  }
}

export default Footer;
