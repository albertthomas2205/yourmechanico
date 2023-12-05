// import { configureStore } from "@reduxjs/toolkit";

// import Registrationdetails from "./user/RegistrationSlice";
// import AuthenticationSlice from "./user/AuthenticationSlice";

// export default  configureStore ({
//     reducer :{
//         user_registration: Registrationdetails,
//         authentication_user: AuthenticationSlice
//     }
// })

// store.js

import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './user/RegistrationSlice';
import authenticationReducer, { set_Authentication, clear_Authentication } from './user/AuthenticationSlice';

// Check for stored authentication data
const storedAuthData = JSON.parse(localStorage.getItem('authData')) || {};

const store = configureStore({
  reducer: {
    user_registration: registrationReducer,
    authentication_user: authenticationReducer,
  },
  preloadedState: {
    authentication_user: storedAuthData,
  },
});

// Subscribe to store changes and update localStorage
store.subscribe(() => {
  const state = store.getState().authentication_user;
  localStorage.setItem('authData', JSON.stringify(state));
});

export const dispatchSetAuthentication = (payload) => store.dispatch(set_Authentication(payload));
export const dispatchClearAuthentication = () => store.dispatch(clear_Authentication);

export default store;
