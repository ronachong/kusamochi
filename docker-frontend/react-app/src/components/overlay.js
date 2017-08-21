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

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is supposed to be the overlay.</p>
          </div>
    );
  }
}

export default Overlay;
