import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((human) => human.id != action.payload);
    },
  },
});

export function selectContacts(state) {
  return state.contacts.items;
}

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
