import { List, Map } from 'immutable';

const init = List([]);
const initOverlay = Map({ on: 0, which: 'nav' });

// overlayReducer computes new state for component
export function overlayReducer(overlay=initOverlay, action) {
  switch(action.type) {
    case 'TOGGLE_OVERLAY':
    return Map(action.payload);
  }
}
