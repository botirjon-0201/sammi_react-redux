import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getArticlesFailure,
  getArticlesStart,
  getArticlesSuccess,
} from "../reducers/articleSlice";
import articleService from "../service/article";
import { Loader } from "../ui";

function Main() {
  const { isLoading, articles } = useSelector((state) => state.article);
  const { loggedIn, user } = useSelector((state) => state.author);
  const navigate = useNavigate();
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

  const deleteArticle = async (slug) => {
    try {
      await articleService.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log(error);
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
              <div className="col" key={article.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.thenews.com.pk/assets/uploads/magazine/2021-11-05/905628_5774808_tips_magazine.jpg"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-text fw-bold">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => navigate(`/article/${article.slug}`)}
                      >
                        View
                      </button>
                      {loggedIn &&
                        user.username === article.author.username && (
                          <>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() =>
                                navigate(`/edit-article/${article.slug}`)
                              }
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => deleteArticle(article.slug)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                    </div>
                    <small className="text-muted fw-bold text-capitalize">
                      {article.author.username}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
