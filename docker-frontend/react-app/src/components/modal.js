import React, { Component } from 'react';
import '../App.css';

import { Modal } from 'react-bootstrap';

const styles = {
  modal : {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0,
  },
  modalBackdrop : {
    position: 'fixed',
    top: 0, bottom: 0, left: 0, right: 0,
    zIndex: 'auto',
    backgroundColor:'#000',
    opacity: 0.5
  },
  modalTextContainer : {
    position: 'absolute',
    width: '90%',
    height: '80%',
    top: '50%', left: '50%',
    transform: `translate(-${50}%, -${50}%)`,
    border: '1px solid #fff555',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20,
    textAlign: 'center'
  }
}

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

class MenuModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props);
    return (
      <Modal
        show={this.props.state}
        onHide={this.props.toggleModal}
        style={styles.modal}
        backdropStyle={styles.modalBackdrop}>
        <Modal.Body style={styles.modalTextContainer}>
          <a>Link 1</a><br />
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
