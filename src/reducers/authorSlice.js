import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    signUserStart(state) {
      state.isLoading = true;
    },
    signUserSuccess(state, action) {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    signUserFailture(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailture } =
  authorSlice.actions;

export default authorSlice.reducer;
