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
        const response = await articleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        console.log(error);
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
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h4 className="d-inline-block mb-2 text-primary text-capitalize">
                    Author: {articleDetail.author.username}
                  </h4>
                  <p className="card-text">
                    <b className="text-muted">About author: </b>{" "}
                    {articleDetail.author.bio}
                  </p>
                  <p className="text-muted">
                    <b>Created at: </b>
                    {moment(articleDetail.createdAt).format(
                      "DD MMM, YYYY, h:mm:ss a"
                    )}
                  </p>
                  <p className="text-muted">
                    <b>Updated at: </b>
                    {moment(articleDetail.updateAt).format(
                      "DD MMM, YYYY, h:mm:ss a"
                    )}
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text
                      x="50%"
                      y="50%"
                      fill="#eceeef"
                      dy=".3em"
                      className="fs-2"
                    >
                      {articleDetail.author.username[0].toUpperCase()}
                    </text>
                  </svg>
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
