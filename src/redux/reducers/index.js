import { combineReducers } from "@reduxjs/toolkit";
import author from "./author_slice";
import article from "./article_slice";

export default combineReducers({
  author,
  article,
});
