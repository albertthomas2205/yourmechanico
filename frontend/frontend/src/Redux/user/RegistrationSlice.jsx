import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "user_registration",
  initialState: {
    name: null,
    email: null,
    phone_number: null,
    password: null,
    otp: null,
  
  },
  reducers: {
    setUserRegistration: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
      state.password = action.payload.password;
      state.otp = action.payload.otp;
    },
  },
});

export const { setUserRegistration } = registrationSlice.actions;

export default registrationSlice.reducer;
