import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./add-contact";
const signUpFormSlice = createSlice({
  name: "form",
  initialState: {
    formValue: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  },
  reducers: {
    getSignUpFormData(state, action) {
      state.formValue = action.payload;
    },
    getUserName(state, action) {
      state.formValue.displayName = action.payload;
    },
    getSignUpEmail(state, action) {
      state.formValue.email = action.payload;
    },
    getSignUpPassword(state, action) {
      state.formValue.password = action.payload;
    },
    getConfirmPassword(state, action) {
      state.formValue.confirmPassword = action.payload;
    },
    clearSignUpFormData(state, action) {
      state.formValue.displayName = "";
      state.formValue.email = "";
      state.formValue.password = "";
      state.formValue.confirmPassword = "";
    },
  },
});

export const {
  getSignUpFormData,
  clearSignUpFormData,
  getUserName,
  getSignUpEmail,
  getSignUpPassword,
  getConfirmPassword,
} = signUpFormSlice.actions;
export const signUpFormReducer = signUpFormSlice.reducer;
