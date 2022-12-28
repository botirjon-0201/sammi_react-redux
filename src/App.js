import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Main, Navbar, Register } from "./components";
import authorService from "./service/author";
import { useDispatch } from "react-redux";
import { signUserFailture, signUserSuccess } from "./reducers/authorSlice";
import { getItem } from "./helpers/persistance-storage";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await authorService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
      dispatch(signUserFailture(error));
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
