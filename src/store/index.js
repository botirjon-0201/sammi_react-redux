import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../reducers/articleSlice";
import authorReducer from "../reducers/authorSlice";

export default configureStore({
  reducer: { author: authorReducer, article: articleReducer },
  devTools: process.env.NODE_ENV !== "production",
});
