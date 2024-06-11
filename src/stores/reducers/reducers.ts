// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import userDataReducer from './userDataReducer'; // Import your individual reducers

const rootReducer = combineReducers({
  userData: userDataReducer, // Add other reducers as needed
});

export default rootReducer;
