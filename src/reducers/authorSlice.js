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
    // LOGIN
    loginUserStart(state) {
      state.isLoading = true;
    },
    loginUserSuccess(state) {},
    loginUserFailture(state) {},
    // REGISTER
    registerUserStart(state) {
      state.isLoading = true;
    },
    registerUserSuccess(state) {
      state.loggedIn = true;
      state.isLoading = false;
    },
    registerUserFailture(state) {
      state.isLoading = false;
      state.error = "error";
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailture,
} = authorSlice.actions;

export default authorSlice.reducer;
