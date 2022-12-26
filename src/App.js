import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Main, Navbar, Register } from "./components";

function App() {
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
