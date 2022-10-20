import React from "react";
import ArrowButton from "../../components/Button/ArrowButton/ArrowButton";

const MainContent = ({ img, mainHeading, desc, flexDirection, bgColor }) => {
  return (
    <div className={`main-content ${flexDirection} ${bgColor}`}>
      <div className="content">
        <h1>{mainHeading}</h1>
        <p>{desc}</p>
        <div>
          <ArrowButton name={`View More`} />
        </div>
      </div>
      <div className="img">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default MainContent;
