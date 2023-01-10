import { createSlice } from "@reduxjs/toolkit";
import { addContact } from "./add-contact";
const contactFormSlice = createSlice({
  name: "form",
  initialState: {
    formValue: {
      userName: "",
      email: "",
      image: "",
      preview: "",
      phoneNumber: "",
    },
  },
  reducers: {
    getContactUserName(state, action) {
      state.formValue.userName = action.payload;
    },
    getContactEmail(state, action) {
      state.formValue.email = action.payload;
    },
    getContactImage(state, action) {
      state.formValue.image = action.payload;
    },
    getContactPreview(state, action) {
      state.formValue.preview = action.payload;
    },
    getContactPhoneNumber(state, action) {
      state.formValue.phoneNumber = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addContact, (state, action) => {
      state.formValue.userName = "";
      state.formValue.email = "";
      state.formValue.image = "";
      state.formValue.preview = "";
      state.formValue.phoneNumber = "";
    });
  },
});

export const {
  getContactUserName,
  getContactEmail,
  getContactImage,
  getContactPreview,
  getContactPhoneNumber,
} = contactFormSlice.actions;
export const contactFormReducer = contactFormSlice.reducer;
