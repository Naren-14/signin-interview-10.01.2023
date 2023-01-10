import { createSlice } from "@reduxjs/toolkit";

const signInFormSlice = createSlice({
  name: "form",
  initialState: {
    signInValue: {
      email: "",
      password: "",
    },
  },
  reducers: {
    getEmail(state, action) {
      state.signInValue.email = action.payload;
    },
    getPassword(state, action) {
      state.signInValue.password = action.payload;
    },
    getSignInData(state, action) {
      state.signInValue = action.payload;
    },
    clearSignInData(state, action) {
      state.signInValue.email = "";
      state.signInValue.password = "";
    },
  },
});

export const { getSignInData, getEmail, getPassword, clearSignInData } =
  signInFormSlice.actions;
export const signInFormReducer = signInFormSlice.reducer;
