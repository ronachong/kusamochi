import { connect } from 'react-redux';
import components from '../components/all';
import { toggleModal } from './actions/modal';

export const App = connect(
  function mapStateToProps(state)
  {
    return { modal: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      toggleModal: (value, type) => dispatch(toggleModal(value, type))
    }
  }
)(components['App'])

console.log(App)
