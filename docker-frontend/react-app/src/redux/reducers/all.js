import { combineReducers } from 'redux';
import { overlayReducer } from './overlay'

const Reducers = combineReducers({
  overlay: overlayReducer
});

export default Reducers
