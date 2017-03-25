import { combineReducers } from 'redux'
// import {compose, createStore, applyMiddleware } from 'redux';

const images = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGES':
      return Object.assign([],state,action.data);
      case 'GET_IMAGES':
        return Object.assign([],state);
    default:
      return state
  }
}

const rootReducer = combineReducers({images});

// export const store = createStore(rootReducer);

export default rootReducer; 