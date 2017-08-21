import { combineReducers } from 'redux';
import { modalReducer } from './modal'

const Reducers = combineReducers({
  modal: modalReducer
});

export default Reducers
