import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../../app/Config";

export const fetchSignup = createAsyncThunk(
  "users/fetchSignup",
  async (user) => {
    const response = await fetch(`${BASE_URI}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error(JSON.stringify(data));
    }
    return { user: data.user, token: data.token };
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    status: "idle",
    token: sessionStorage.getItem("token"),
    errors: {},
  },
  extraReducers: {
    [fetchSignup.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSignup.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [fetchSignup.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usersSlice.reducer;
