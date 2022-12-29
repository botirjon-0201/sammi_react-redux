import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  ArticleDetail,
  CreateArticle,
  EditArticle,
  EditUser,
  Login,
  Main,
  Navbar,
  Register,
  UserDetail,
} from "./components";
import authorService from "./service/author";
import { useDispatch } from "react-redux";
import { signUserFailure, signUserSuccess } from "./reducers/author_slice";
import { getItem } from "./helpers/persistance-storage";
import articleService from "./service/article";
import {
  getArticlesFailure,
  getArticlesStart,
  getArticlesSuccess,
} from "./reducers/article_slice";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await authorService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      dispatch(signUserFailure(error));
    }
  };

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await articleService.getArticles();
      dispatch(getArticlesSuccess(response.articles));
    } catch (error) {
      dispatch(getArticlesFailure(error));
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/edit-article/:slug" element={<EditArticle />} />
        <Route path="/user" element={<UserDetail />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
