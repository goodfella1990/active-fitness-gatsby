import React from "react";
import logo from "../../images/Logo.png";
import Input from "../../UI/components/Input/Input";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          PLEASE FEEL FREE TO SEND US E-MAIL AT burnham@activefitnessclub.co.uk
          FOR ANY ADDITIONAL INQUIRIES.
        </div>
      </div>
      <div className="lower">
        <div className="item">
          <h3>ABOUT</h3>
          <p>
            Professional, affordable fitness club in Burnham, Slough. We offer a
            great range of fitness classes and a fantastic training facility.
          </p>
        </div>
        <div className="item">
          <h3>LINKS LIST</h3>
          <div>
            <li>Join Us</li>
            <li>Guests</li>
            <li>Active Couch</li>
            <li>Timetable</li>
            <li>Contact</li>
          </div>
        </div>
        <div className="item">
          <h3>ADDRESS</h3>
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <li>Burnham FC, Burnham, London SL1 8JG</li>
            </div>
            <li>burnham@activefitnessclub.co.uk</li>
            <li>01628 290273</li>
          </div>
        </div>
        <div className="item">
          <h3>START NOW</h3>
          <div>
            <li>
              <Input />
            </li>
            <li>
              <div className="social">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <BsInstagram />
                </li>
              </div>
            </li>
            {/* <li>@activefitnessburnham</li> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
