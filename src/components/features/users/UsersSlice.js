import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../../app/config";

export const fetchSignup = createAsyncThunk(
  "session/fetchSignup",
  async (formData) => {
    const response = await fetch(`${BASE_URI}/signup`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return { user: data };
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    status: "idle",
    errors: {},
  },
  extraReducers: {
    [fetchSignup.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSignup.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [fetchSignup.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = JSON.parse(action.error.message);
    },
  },
});

export default usersSlice.reducer;
