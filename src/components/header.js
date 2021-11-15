import React from "react";
import "../styles/header.scss";
import nearbyzz from "../assets/nearbyzz.png";
// components
import HeaderNavDropdown from "./HeaderNavDropdown";
export default function Header() {
  return (
    <div className="header_main">
      <div className="header_container">
        <a href="/">
          <div className="left_header">
            <div className="nextmedia_logo">
              <img src={nearbyzz} alt="nearbyzz" />
            </div>
            <p>Nearbyzz</p>
          </div>
        </a>
        <HeaderNavDropdown />
      </div>
    </div>
  );
}
