import { configureStore } from "@reduxjs/toolkit";
import SessionSlice from "../components/Features/session/SessionSlice";
import UsersReducer  from "../components/Features/Users/UsersSlice";

export default configureStore({
  reducer: {
    session: SessionSlice,
    users: UsersReducer
  },
});
