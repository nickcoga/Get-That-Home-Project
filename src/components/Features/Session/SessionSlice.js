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
    return { token: data.token };
  }
);

const SessionSlice = createSlice({
  name: "session",
  initialState: {
    token: sessionStorage.getItem("token"),
    error: null,
  },
  reducers: {
    killToken: (state) => {
      sessionStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: {
    [fetchLogin.fulfilled]: (state, action) => {
      state.error = null;
      state.token = action.payload.token;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { killToken } = SessionSlice.actions;
export default SessionSlice.reducer;
