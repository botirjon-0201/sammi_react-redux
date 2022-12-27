import React, { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.author);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return msg.includes(name)
        ? `${name[0].toUpperCase()}${name.slice(1)} ${msg.slice(name.length)}`
        : `${name[0].toUpperCase()}${name.slice(1)} ${msg}`;
    });
  }, [error]);

  return (
    error !== null &&
    errorMessage().map((error) => (
      <div key={error} className="alert alert-danger p-1 m-1" role="alert">
        {error}
      </div>
    ))
  );
}

export default ValidationError;
