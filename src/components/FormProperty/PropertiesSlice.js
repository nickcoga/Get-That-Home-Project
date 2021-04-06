import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/Config";

export const fetchProperty = createAsyncThunk(
  "properties/fetchProperty",
  async (property) => {
    const response = await fetch(`${BASE_URI}/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error(JSON.stringify(data));
    }
    return { property: data.property, token: data.token };
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    property: null,
    status: "idle",
    token: sessionStorage.getItem("token"),
    errors: {},
  },
  extraReducers: {
    [fetchProperty.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProperty.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [fetchProperty.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default propertiesSlice.reducer;
