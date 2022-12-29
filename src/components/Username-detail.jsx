import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserDetailFailure,
  getUserDetailStart,
  getUserDetailSuccess,
} from "../reducers/authorSlice";
import authorService from "../service/author";
import { Loader } from "../ui";

function UsernameDetail() {
  const { user, isLoading } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetail = async () => {
      dispatch(getUserDetailStart());
      try {
        const response = await authorService.getUser();
        dispatch(getUserDetailSuccess(response.user));
      } catch (error) {
        dispatch(getUserDetailFailure());
      }
    };
    getUserDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        user && (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://www.wikihow.com/images/thumb/e/e2/Write-an-Article-Review-Step-2-Version-3.jpg/v4-460px-Write-an-Article-Review-Step-2-Version-3.jpg.webp"
                  className="img-fluid rounded-start"
                  alt="img"
                />
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success"
                      onClick={() => navigate(`/`)}
                    >
                      GoBack
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => navigate(`/edit-user`)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                  <small className="text-muted fw-bold text-capitalize">
                    {user.username}
                  </small>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{user.username}</h4>
                  <p>
                    <strong>Email: </strong> {user.email}
                  </p>
                  <p className="card-text">
                    <strong>About user: </strong> {user.bio}
                  </p>
                  <p className="card-text">
                    <strong>Created at: </strong>
                    <small className="text-muted">
                      {moment(user.createdAt).format("DD MMM, YYYY, h:mm:ss a")}
                    </small>
                  </p>
                  <p className="card-text">
                    <strong>Updated at: </strong>
                    <small className="text-muted">
                      {moment(user.updateAt).format("DD MMM, YYYY, h:mm:ss a")}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default UsernameDetail;
