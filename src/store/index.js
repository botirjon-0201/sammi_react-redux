import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "../reducers/authorSlice";

export default configureStore({
  reducer: { author: authorReducer },
  devTools: process.env.NODE_ENV !== "production",
});
