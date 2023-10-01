import { configureStore } from "@reduxjs/toolkit";
import endpointsReducer from "./endpoints/endpointsSlice";

export const store = configureStore({
  reducer: {
    logs: endpointsReducer,
  },
});
