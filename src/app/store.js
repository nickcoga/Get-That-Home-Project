import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../components/features/session/sessionSlice";

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
});
