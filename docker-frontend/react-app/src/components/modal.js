import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Modal } from 'react-bootstrap';

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


class MenuModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
      <Modal show={this.props.state} onHide={this.props.toggleModal}>
        <Modal.Body>
          <a>Link 1</a>
          <a>Link 2</a>
        </Modal.Body>
      </Modal>
      // <div style={ hideIfFalse(this.props.state ) }>
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>This is supposed to be the modal.</p>
      // </div>
    );
  }
}

export default MenuModal;
