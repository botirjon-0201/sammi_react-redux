import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants";
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../reducers/authorSlice";

function Navbar() {
  const { user, loggedIn } = useSelector((state) => state.author);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img src={logo} alt="logo" />
      </Link>
      {loggedIn ? (
        <div className="col-md-6 text-end">
          <Link to={"/user"} className="text-decoration-none">
            <h5 className="d-inline-flex me-3 my-auto align-middle text-dark">
              {user.username}
            </h5>
          </Link>
          <button
            type="button"
            className="btn btn-outline-success me-2"
            onClick={() => navigate("/create-article")}
          >
            Create
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              navigate("/login");
              dispatch(logoutUser());
              removeItem("token");
            }}
          >
            Log-out
          </button>
        </div>
      ) : (
        <div className="col-md-6 text-end">
          <button
            type="button"
            className="btn btn-outline-primary me-2"
            onClick={() => navigate("/login")}
          >
            Log-in
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/register")}
          >
            Sign-up
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
