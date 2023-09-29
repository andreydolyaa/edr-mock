import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 10,
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
    updatePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setData, setLoading, setError, updatePage } = logsSlice.actions;
export default logsSlice.reducer;
