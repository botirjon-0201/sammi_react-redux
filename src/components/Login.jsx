import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { icon } from "../constants";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../reducers/author";
import authorService from "../service/author";
import { Input } from "../ui";
import { ValidationError } from "./";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, loggedIn } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = {
      email,
      password,
    };
    try {
      const response = await authorService.userLogin(user);
      dispatch(signUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <div className="register text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={loginHandler}>
          <img className="mb-2" src={icon} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <ValidationError />
          <Input
            label={"Email address"}
            type={"email"}
            placeholder={"name@example.com"}
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
            state={password}
            setState={setPassword}
          />
          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "Login"}
          </button>
          <p className="mt-3 mb-3 text-muted">
            © {new Date().getFullYear()} year
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
