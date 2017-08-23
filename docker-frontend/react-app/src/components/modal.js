import React, { Component } from 'react';
import '../App.css';

import Modal from 'react-overlays/lib/Modal';
import Transition, { ENTERED, ENTERING } from 'react-transition-group/Transition';
import injectCss from '../styles/css/injectCss';

const FADE_DURATION = 300;

injectCss(`
  .fade {
    opacity: 0;
    transition: opacity ${FADE_DURATION}ms linear;
  }
  .in {
    opacity: 1;
  }
`);

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
    top: '45%', left: '50%',
    transform: `translate(-${50}%, -${50}%)`,
    border: '1px solid #fff555',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20,
    textAlign: 'center'
  },
  fadeTransition : {
    [ENTERING]: 'in',
    [ENTERED]: 'in',
  }
}

const FadeTransition = ({ children, ...props }) => {
  return (
    <Transition {...props} timeout={FADE_DURATION}>
      {(status, innerProps) => React.cloneElement(children, {
        ...innerProps,
        className: `fade ${styles.fadeTransition[status]} ${children.props.className}`,
      })}
    </Transition>
  );
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
    console.log(this)
    return (
        <Modal
          transition={FadeTransition}
          show={this.props.state}
          onHide={this.props.toggleModal}
          style={styles.modal}
          backdropStyle={styles.modalBackdrop}>
          <div
            style={styles.modalTextContainer}
            onMouseLeave={() => this.props.toggleModal(false, 'nav')}
          >
            <a>Link 1</a><br />
            <a>Link 2</a>
          </div>
        </Modal>
    );
  }
}

export default MenuModal;
