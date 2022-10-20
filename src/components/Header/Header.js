import React, { useState } from "react";
import HeaderData from "./HeaderData";
import logo from "../../images/Logo.png";
import MenuBar from "../../UI/Icons/MenuBar";

const Header = () => {
  const [menuBarState, setMenuBarState] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-list">
        <ul>
          {HeaderData.map((item) => (
            <li key={item.id} className="li">
              <div>{item.title}</div>
              <div className="dot"></div>
            </li>
          ))}
        </ul>
      </div>
      {menuBarState && (
        <div className="menubar-list">
          <ul>
            {HeaderData.map((item) => (
              <li key={item.id} className="li">
                <div>{item.title}</div>
                <div className="dot"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="right">
        <button className="btn-white">Join Now</button>
        <div
          className="menu-bar"
          onClick={() => setMenuBarState((prev) => !prev)}
        >
          <MenuBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
