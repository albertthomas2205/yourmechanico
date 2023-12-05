// authenticationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  isAuthenticated: false,
  isAdmin: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication_user',
  initialState,
  reducers: {
    set_Authentication: (state, action) => {
      state.name = action.payload.name;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isAdmin = action.payload.isAdmin;
    },
    clear_Authentication: (state) => {
      // Clear the authentication state on logout
      state.name = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
    },
  },
});

export const { set_Authentication, clear_Authentication } = authenticationSlice.actions;

export default authenticationSlice.reducer;
