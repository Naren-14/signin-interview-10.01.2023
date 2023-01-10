import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    data: [],
  },
  reducers: {
    addContact(state, action) {
      state.data.push({
        id: nanoid(),
        userName: action.payload.userName,
        email: action.payload.email,
        image: action.payload.image,
        preview: action.payload.preview,
        phoneNumber: action.payload.phoneNumber,
      });
    },
    removeContact(state, action) {
      const updated = state.data.filter((contact) => {
        return contact.id !== action.payload;
      });
      state.data = updated;
    },
    editContact(state, action) {
      const updated = state.data.map((contact) => {
        if (contact.id === action.payload) {
          return (contact = action.payload);
        } else {
          return contact;
        }
      });
      state.data = updated;
    },
  },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
