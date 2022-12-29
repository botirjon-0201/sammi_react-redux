import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleDetailFailture,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../reducers/articleSlice";
import articleService from "../service/article";
import { ArticleForm } from "../ui";

function EditArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const { slug } = useParams();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await articleService.getArticleDetail(slug);
        setTitle(response.article.title);
        setDescription(response.article.description);
        setBody(response.article.body);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailture());
      }
    };
    getArticleDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const formProps = {
    title,
    setTitle,
    body,
    setBody,
    description,
    setDescription,
    // formSubmit,
  };

  return (
    <div className="text-center">
      <h1>Edit-article</h1>
      <ArticleForm {...formProps} />
    </div>
  );
}

export default EditArticle;
