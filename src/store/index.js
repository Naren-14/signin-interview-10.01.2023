import { configureStore } from "@reduxjs/toolkit";
import {
  getSignInData,
  clearSignInData,
  signInFormReducer,
  getEmail,
  getPassword,
} from "./slices/sign-in-formSlice";
import {
  signUpFormReducer,
  clearSignUpFormData,
  getSignUpFormData,
  getUserName,
  getSignUpEmail,
  getSignUpPassword,
  getConfirmPassword,
} from "./slices/sign-up-formSlice";

import {
  addContact,
  editContact,
  removeContact,
  contactReducer,
} from "./slices/add-contact";
import {
  contactFormReducer,
  getContactUserName,
  getContactEmail,
  getContactImage,
  getContactPreview,
  getContactPhoneNumber,
} from "./slices/contact-form-slice";
const store = configureStore({
  reducer: {
    contacts: contactReducer,
    signInForm: signInFormReducer,
    signUpForm: signUpFormReducer,
    contactForm: contactFormReducer,
  },
});

export {
  addContact,
  editContact,
  removeContact,
  getContactUserName,
  getContactEmail,
  getContactImage,
  getContactPreview,
  getContactPhoneNumber,
  store,
  getSignInData,
  getEmail,
  getPassword,
  getUserName,
  getSignUpEmail,
  getSignUpPassword,
  getConfirmPassword,
  getSignUpFormData,
  clearSignUpFormData,
  clearSignInData,
  signInFormReducer,
};
