import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleDetailFailture,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../reducers/articleSlice";
import articleService from "../service/article";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await articleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      console.log(error);
      dispatch(getArticleDetailFailture());
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);

  return <div>slug: {slug}</div>;
}

export default ArticleDetail;
