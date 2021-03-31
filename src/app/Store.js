import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../components/Features/Session/SessionSlice";

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
});
