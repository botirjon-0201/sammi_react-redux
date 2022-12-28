import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart(state) {
      state.isLoading = true;
    },
    getArticlesSuccess(state, action) {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getArticleDetailStart(state) {
      state.isLoading = true;
    },
    getArticleDetailSuccess(state, action) {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailture(state) {
      state.isLoading = false;
    },
  },
});

export default articleSlice.reducer;
export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailture,
} = articleSlice.actions;
