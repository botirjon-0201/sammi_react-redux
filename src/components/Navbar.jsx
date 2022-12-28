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

  const logoutHandler = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 pt-3 mb-4 border-bottom">
      <Link to={`/`}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <h5 className="me-3 py-2 m-0 text-dark text-decoration-none">
              {user.username}
            </h5>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={logoutHandler}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/login"}
            >
              Log in
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/register"}
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
