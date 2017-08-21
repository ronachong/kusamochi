import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

// export function Modal(props) {
//   const { state, toggleModal } = props;
//
//   return (
//     <div>
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>This is supposed to be the modal.</p>
//     </div>
//   );
// }

var hideIfFalse = function(boolean) {
  return boolean ? {} : {display: 'none'};
};


class Modal extends Component {
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
            <p>This is supposed to be the modal.</p>
          </div>
    );
  }
}

export default Modal;
