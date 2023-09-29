import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setData, setLoading, setError } = logsSlice.actions;
export default logsSlice.reducer;
