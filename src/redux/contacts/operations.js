import { createAsyncThunk } from "@reduxjs/toolkit";

import { authInstance, setAuthHeader } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setAuthHeader(token);
      const response = await authInstance.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setAuthHeader(token);
      const response = await authInstance.post("/contacts", contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactID, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setAuthHeader(token);
      await authInstance.delete(`/contacts/${contactID}`);
      return contactID;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
