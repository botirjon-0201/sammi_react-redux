import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../reducers/article";
import authorReducer from "../reducers/author";

export default configureStore({
  reducer: { author: authorReducer, article: articleReducer },
  devTools: process.env.NODE_ENV !== "production",
});
