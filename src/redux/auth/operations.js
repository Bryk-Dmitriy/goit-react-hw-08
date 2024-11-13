import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthHeader = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiUserRegister = createAsyncThunk(
  "auth/UserRegister",
  async (profileData, thunkApi) => {
    try {
      console.log(profileData);
      const { data } = await authInstance.post("/users/signup", profileData);
      setAuthHeader(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiUserLogin = createAsyncThunk(
  "auth/UserLogin",
  async (profileData, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/login", profileData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/CurrentUser",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkApi.rejectWithValue("No token to refresh");
    }
    try {
      setAuthHeader(token);
      const { data } = await authInstance.get("/users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLogout = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/logout");
      clearAuthHeader();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
