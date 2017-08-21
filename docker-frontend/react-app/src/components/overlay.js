import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

// export function Overlay(props) {
//   const { state, toggleOverlay } = props;
//
//   return (
//     <div>
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>This is supposed to be the overlay.</p>
//     </div>
//   );
// }

var hideIfFalse = function(boolean) {
  return boolean ? {} : {display: 'none'};
};


class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
          <div style={ hideIfFalse(this.props.state ) }>
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is supposed to be the overlay.</p>
          </div>
    );
  }
}

export default Overlay;
