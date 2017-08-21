import { connect } from 'react-redux';
import components from '../components/all';
import { toggleOverlay } from './actions/overlay';

export const App = connect(
  function mapStateToProps(state)
  {
    return { overlay: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      toggleOverlay: (value, type) => dispatch(toggleOverlay(value, type))
    }
  }
)(components['App'])

console.log(App)
