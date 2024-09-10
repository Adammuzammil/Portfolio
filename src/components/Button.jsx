import React from "react";

const Button = (props) => {
  return (
    <button className={`btn ${props.containerClass}`}>
      {props.isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {props.name}
    </button>
  );
};

export default Button;
