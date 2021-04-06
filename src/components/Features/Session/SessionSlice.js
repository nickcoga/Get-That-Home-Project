import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../../app/Config";

export const fetchLogin = createAsyncThunk(
  "session/fetchLogin",
  async (credentials) => {
    const response = await fetch(`${BASE_URI}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors.message);
    }
    return { token: data.token, user:data.user };
  }
);

const SessionSlice = createSlice({
  name: "session",
  initialState: {
    token: sessionStorage.getItem("token"),
    status: "idle",
    error: null,
    user: {},
  },
  reducers: {
    killToken: (state) => {
      sessionStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: {
    [fetchLogin.pending]: (state, action) => {
      state.error = null;
      state.status = "loading";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.error = null;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.status = "succeced";
    },
    [fetchLogin.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { killToken } = SessionSlice.actions;
export default SessionSlice.reducer;
