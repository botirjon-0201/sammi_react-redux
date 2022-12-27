import React from "react";

function Input({ label, type = "text", placeholder, state, setState }) {
  return (
    <div className="form-floating">
      <input
        type={type}
        className="form-control"
        // id="floatingInput"
        value={state}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}

export default Input;
