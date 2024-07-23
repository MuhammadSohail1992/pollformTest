// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import poleSlice from './poleSlice';

const rootReducer = combineReducers({
  example: poleSlice,
});

export default rootReducer;
