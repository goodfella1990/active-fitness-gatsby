import React from "react";
import { VscArrowRight } from "react-icons/vsc";

const Input = ({ children }) => {
  return (
    <div className="input">
      <input>{children}</input>
      <div className="arrow">
        <VscArrowRight />
      </div>
    </div>
  );
};

export default Input;
