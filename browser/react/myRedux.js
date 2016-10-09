const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
import { createStore } from 'redux';

// Note that we initialize our state as a plain object
function reducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, state, {albums: action.albums});
    default: return state;
  }
}

const store = createStore(reducer);

module.exports = store;
