// userDataReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = null; // Set initial state to null

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // Update userData based on action payload
      return action.payload; // Simply return the payload, assuming it's an object or null
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
