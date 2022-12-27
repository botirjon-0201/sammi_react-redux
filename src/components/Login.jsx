import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "../constants";
import {
  signUserFailture,
  signUserStart,
  signUserSuccess,
} from "../reducers/authorSlice";
import authorService from "../service/author";
import Input from "../ui/Input";
import { ValidationError } from "./";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.author);
  const dispatch = useDispatch();

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
    } catch (error) {
      dispatch(signUserFailture(error.response.data.errors));
    }
  };

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
