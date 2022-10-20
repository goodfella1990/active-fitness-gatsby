import React from "react";
import { VscArrowRight } from "react-icons/vsc";

const ArrowButton = ({ name }) => {
  return (
    <div className="input">
      <button>{name}</button>
      <div className="arrow">
        <VscArrowRight />
      </div>
    </div>
  );
};

export default ArrowButton;
