import React, { useState } from "react";
import { icon } from "../constants";
import { Checkbox } from "../ui";
import Input from "../ui/Input";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
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
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Register
          </button>
          <p className="mt-3 mb-3 text-muted">© {new Date().getFullYear()} </p>
        </form>
      </main>
    </div>
  );
}

export default Register;
