import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticlesFailure,
  getArticlesStart,
  getArticlesSuccess,
} from "../reducers/article_slice";
import articleService from "../service/article";
import { Loader } from "../ui";
import ArticleCard from "./Article-card";

function Main() {
  const { isLoading, articles } = useSelector((state) => state.article);
  const dispatch = useDispatch();

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
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="album py-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                getArticles={getArticles}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
