import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getArticleDetailFailture,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../reducers/articleSlice";
import articleService from "../service/article";
import { Loader } from "../ui";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);
  const navigate = useNavigate();

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await articleService.getArticle(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailture());
      }
    };
    getArticleDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        articleDetail && (
          <div className="p-5 mb-4 bg-light rounded-3">
            <h2 className="display-5 fw-bold">Title: {articleDetail.title}</h2>
            <p className="col-md-8 fs-4">
              <strong>Description: </strong> {articleDetail.description}
            </p>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://www.wikihow.com/images/thumb/e/e2/Write-an-Article-Review-Step-2-Version-3.jpg/v4-460px-Write-an-Article-Review-Step-2-Version-3.jpg.webp"
                    className="img-fluid rounded-start"
                    alt="img"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">
                      {articleDetail.author.username || "No name"}
                    </h4>
                    <p>
                      <strong>Email: </strong>{" "}
                      {articleDetail.author.email || "email not found"}
                    </p>
                    <p className="card-text">
                      <strong>About user: </strong> {articleDetail.author.bio}
                    </p>
                    <p className="card-text">
                      <strong>Created at: </strong>
                      <small className="text-muted">
                        {moment(articleDetail.createdAt).format(
                          "DD MMM, YYYY, h:mm:ss a"
                        )}
                      </small>
                    </p>
                    <p className="card-text">
                      <strong>Updated at: </strong>
                      <small className="text-muted">
                        {moment(articleDetail.updateAt).format(
                          "DD MMM, YYYY, h:mm:ss a"
                        )}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>{articleDetail.body}</p>
            <button
              className="btn btn-primary btn-lg"
              type="button"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default ArticleDetail;
