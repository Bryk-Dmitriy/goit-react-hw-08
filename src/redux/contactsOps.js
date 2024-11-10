import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://6727f1d2270bd0b97553f2aa.mockapi.io/contacts"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://6727f1d2270bd0b97553f2aa.mockapi.io/contacts",
        contact
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactID, thunkAPI) => {
    try {
      await axios.delete(
        `https://6727f1d2270bd0b97553f2aa.mockapi.io/contacts/${contactID}`
      );
      return contactID;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
