import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionsTypes from './contacts-types';

const initialFilter = '';

const items = createReducer(initialState, {
  [actionsTypes.ADDCONTACT]: (state, action) => [...state, action.payload],
  [actionsTypes.REMOVECONTACT]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

// => {
//   // switch (action.type) {
//   //   case actionsTypes.ADDCONTACT:
//   //     return [...state, action.payload];
//   //   case actionsTypes.REMOVECONTACT:
//   //     return state.filter(({ id }) => id !== action.payload);
//   //   default:
//   //     return state;
//   // }
// };

const filter = createReducer(initialFilter, {
  [actionsTypes.CONTACTFILTER]: (state, action) => action.payload,
});
// => {
//   switch (action.type) {
//     case actionsTypes.CONTACTFILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
