import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});