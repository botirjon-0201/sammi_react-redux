import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { icon } from "../constants";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../reducers/author_slice";
import authorService from "../service/author";
import { Checkbox, Input } from "../ui";
import { ValidationError } from "./";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, loggedIn } = useSelector((state) => state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = {
      username: name,
      email,
      password,
    };
    try {
      const response = await authorService.userRegister(user);
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
        <form onSubmit={registerHandler}>
          <img className="mb-2" src={icon} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <ValidationError />
          <Input
            label={"Username"}
            placeholder={"Username"}
            state={name}
            setState={setName}
          />
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
          <Checkbox label={"Remember me"} value={"remember-me"} />
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "registering..." : "Register"}
          </button>
          <p className="mt-3 mb-3 text-muted">
            © {new Date().getFullYear()} year
          </p>
        </form>
      </main>
    </div>
  );
}

export default Register;
