import { Map } from 'immutable';

const initModal = Map({ on: 0, which: 'nav' });

// modalReducer computes new state for component
export function modalReducer(modal=initModal, action) {
  switch(action.type) {
    case 'TOGGLE_OVERLAY':
      return Map(action.payload);
    default:
      return initModal;
  }
}
