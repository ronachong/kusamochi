import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  mouseEnter() {
    console.log("Mouse enter.");
    // let's have nav icon appear
    this.props.toggleModal(true, 'nav');
  }
  mouseLeave() {
    console.log("Mouse leave.");
    // let's have nav icon disappear
  }
  onClick() {
    console.log("Mouse click.")
    // let's have nav appear
    //this.props.toggleModal(true, 'nav');
  }
  render() {
    console.log(this.props);
    return (
      <a
        href='#'
        onMouseEnter={() => this.mouseEnter()}
        onMouseLeave={() => this.mouseLeave()}
        onClick={() => this.onClick()}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>
        </header>
      </a>
    );
  }
}

export default Header;
