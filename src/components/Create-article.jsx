import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../reducers/articleSlice";
import articleService from "../service/article";
import ArticleForm from "../ui/Article-form";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    dispatch(postArticleStart());
    const article = { title, description, body };
    try {
      await articleService.postArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure(error));
    }
  };

  const formProps = {
    title,
    setTitle,
    titlePlaceholder: "Title",
    description,
    setDescription,
    descriptionPlaceholder: "Description",
    body,
    setBody,
    bodyPlaceholder: "Body",
    formSubmit,
  };

  return (
    <div className="text-center">
      <h1>Create-article</h1>
      <ArticleForm {...formProps} />
    </div>
  );
}

export default CreateArticle;
