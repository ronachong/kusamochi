import { combineReducers } from 'redux';
import { overlayReducer } from './overlay'

const CombinedReducer = combineReducers({
  overlay: overlayReducer
});

export default CombinedReducer
