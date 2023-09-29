import { configureStore } from "@reduxjs/toolkit";
import logsReducer from "./logs/logsSlice";

export const store = configureStore({
  reducer: {
    logs: logsReducer,
  },
});
