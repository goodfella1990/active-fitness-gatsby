import React from "react";
import ArrowButton from "../../components/Button/ArrowButton/ArrowButton";

const Map = () => {
  return (
    <div className="map">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270603.1075148126!2d-1.8419519231039034!3d51.53803969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876636147ac8aa5%3A0xbc93424ebd096f15!2sBurnham%20Football%20Club!5e0!3m2!1sen!2sin!4v1666247759449!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="content">
        <h1>FIND US NEAR YOU</h1>
        <p>Flexible gym memberships in the Burnham area</p>
        <ArrowButton name={`Join Us`} />
      </div>
    </div>
  );
};

export default Map;
