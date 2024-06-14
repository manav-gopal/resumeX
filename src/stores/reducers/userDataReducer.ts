// userDataReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  data: null,
  accessToken: null // Add accessToken to the state
}; 

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload.data; // Assuming action.payload contains data
      state.accessToken = action.payload.accessToken; // Set accessToken
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
