import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Hero = ({ mainHeading, subHeading, BG }) => {
  return (
    <div className="hero">
      <div className="bg">
        <img src={BG} alt="bg" />
      </div>
      <div className="content">
        <div className="row">
          <h4 className="sub-heading">{subHeading}</h4>
        </div>
        <h1 className="main-heading">{mainHeading}</h1>
      </div>
    </div>
  );
};

export default Hero;
