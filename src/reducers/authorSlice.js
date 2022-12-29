import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

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
      setItem("token", action.payload.token);
    },
    signUserFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser(state) {
      state.user = null;
      state.loggedIn = false;
    },
    getUserDetailStart(state) {
      state.isLoading = true;
    },
    getUserDetailSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },
    getUserDetailFailure(state) {
      state.isLoading = false;
    },
    editUserStart(state) {
      state.isLoading = true;
    },
    editUserSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },
    editUserFailure(state) {
      state.isLoading = false;
    },
  },
});

export default authorSlice.reducer;
export const {
  signUserStart,
  signUserSuccess,
  signUserFailure,
  logoutUser,
  getUserDetailStart,
  getUserDetailSuccess,
  getUserDetailFailure,
  editUserStart,
  editUserSuccess,
  editUserFailure,
} = authorSlice.actions;
