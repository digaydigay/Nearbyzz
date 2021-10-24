import React from "react";
import "../styles/header.scss";
import nextmedia from "../assets/nextmedia.png";

// components
import HeaderNavDropdown from "./HeaderNavDropdown";
export default function Header() {
  return (
    <div className="header_main">
      <div className="header_container">
        <div className="left_header">
          <div className="nextmedia_logo">
            <img src={nextmedia} alt="nextmedia" />
          </div>
          <h3>Nearbyzz</h3>
        </div>
        <HeaderNavDropdown />
      </div>
    </div>
  );
}
