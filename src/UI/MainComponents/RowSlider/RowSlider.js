import React from "react";

const RowSlider = ({ list, bg }) => {
  return (
    <div className={`row-slider ${bg}`}>
      <div>
        <h1>Active Fitness Club Burnham Facilities</h1>
      </div>
      <div className="slider">
        {list.map((item, index) => (
          <div className="item" key={index}>
            <div className="img">
              <img src={item.img} alt="img" />
            </div>
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowSlider;
