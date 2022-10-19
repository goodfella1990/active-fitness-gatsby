import React from "react";
import { Link } from "gatsby";
import HeaderData from "./HeaderData";
import logo from "../../images/Logo.png";
import { IoIosMenu } from "react-icons/io";
import MenuBar from "../../UI/Icons/MenuBar";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-list">
        <ul>
          {HeaderData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="right">
        <button className="btn-white">Join Now</button>
        <div className="menu-bar">
          <MenuBar />
          {/* <IoIosMenu /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
