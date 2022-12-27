import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
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
    registerUserSuccess(state) {},
    registerUserFailture(state) {},
  },
});

export const { loginUserStart, registerUserStart } = authorSlice.actions;

export default authorSlice.reducer;
