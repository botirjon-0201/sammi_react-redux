import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import articleService from "../service/article_service";

function ArticleCard({ article, getArticles }) {
  const { loggedIn, user } = useSelector((state) => state.author);
  const navigate = useNavigate();

  const deleteArticle = async (slug) => {
    try {
      await articleService.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src="https://www.thenews.com.pk/assets/uploads/magazine/2021-11-05/905628_5774808_tips_magazine.jpg"
          alt="img"
          className="img-fluid rounded-start"
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
              onClick={() => navigate(`/articles/${article.slug}`)}
            >
              View
            </button>
            {loggedIn && user.username === article.author.username && (
              <>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => navigate(`/edit-article/${article.slug}`)}
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
          {loggedIn && user.username === article.author.username ? (
            <Link to={"/user"} className="text-decoration-none">
              <small className="text-muted fw-bold text-capitalize">
                {article.author.username}
              </small>
            </Link>
          ) : (
            <small className="text-muted fw-bold text-capitalize">
              {article.author.username}
            </small>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
