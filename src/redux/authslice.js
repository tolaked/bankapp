import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    loginSucess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    signupSucess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const signup = createAsyncThunk(
  async (
    { firstName, lastName, emailAddress, password },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "https://simple-bank.onrender.com/api/v1/users",
        { firstName, lastName, emailAddress, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const login = createAsyncThunk(
  async (
    { emailAddress, password },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "https://simple-bank.onrender.com/api/v1/users/login",
        { emailAddress, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const { loginSucess, loginFailure, signupSucess, signupFailure } =
  authSlice.actions;

export default authSlice.reducers;
