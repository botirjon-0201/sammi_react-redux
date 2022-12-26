import React from "react";

function Checkbox({ label, value }) {
  return (
    <div className="checkbox my-3">
      <label>
        <input type="checkbox" value={value} /> {label}
      </label>
    </div>
  );
}

export default Checkbox;
