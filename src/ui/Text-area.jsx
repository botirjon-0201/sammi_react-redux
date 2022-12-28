import React from "react";

function TextArea({ label, state, setState, height = "75px" }) {
  return (
    <div class="form-floating">
      <textarea
        class="form-control"
        id="floatingTextarea2"
        value={state}
        placeholder={label}
        style={{ height: height }}
        onChange={(e) => setState(e.target.value)}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
}

export default TextArea;
