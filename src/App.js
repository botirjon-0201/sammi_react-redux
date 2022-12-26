import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Main, Register } from "./components";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
