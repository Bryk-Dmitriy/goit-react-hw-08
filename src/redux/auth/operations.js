import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
  // headers: {
  //     "Authorization": "Bearer [token]"
  // }
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiUserRegister = createAsyncThunk(
  "auth/UserRegister",
  async (profileData, thunkApi) => {
    try {
      console.log(profileData);
      const { data } = await authInstance.post("/users/signup", profileData);
      setToken(data.token);
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
      setToken(data.token);
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
      setToken(token);
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
      clearToken();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
