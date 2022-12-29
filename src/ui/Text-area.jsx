import React from "react";

function TextArea({ label, type = "text", state, setState, height = "75px" }) {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        id="floatingTextarea2"
        value={state}
        type={type}
        placeholder={label}
        style={{ height: height }}
        onChange={(e) => setState(e.target.value)}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
}

export default TextArea;
