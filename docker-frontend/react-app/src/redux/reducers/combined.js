import { combineREducers } from 'redux';
import { overlayStateHandler } from './overlay'

const CombinedReducer = combineReducers({
  overlay: overlayReducer
});

export default CombinedReducer
