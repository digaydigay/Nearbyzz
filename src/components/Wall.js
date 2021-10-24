import React from "react";
import "../styles/global.scss";
import WallLeft from "./WallLeft";
import WallRight from "./WallRight";
import { UseToggle } from "../Context/toogle";

// components
import CreatePost from "./CreatePost";
import HeaderNavbar from "./HeaderNavbar";

export default function Home() {
  const {
    isWallLeft,
    setIsWallLeft,
    isWallRight,
    setIsWallRight,
    toggleCreate,
    setToggleCreate,
  } = UseToggle();
  return (
    <div className="wall_main">
      <div className="wall_left_container">
        <WallLeft />
      </div>
      <div className="chevron_wrapper">
        <div
          className={`chevron_left ${!isWallLeft && "chevron_left_toggle"}`}
          onClick={() => setIsWallLeft(!isWallLeft)}
        >
          <div className="toggle_chevron">
            <div className="fas fa-chevron-circle-left"></div>
          </div>
        </div>
      </div>

      <div className="wall_center_container">
        <HeaderNavbar />
        <CreatePost />
        <div
          className="tooglecreate"
          onClick={() => setToggleCreate(!toggleCreate)}
        >
          <i
            className={` ${
              toggleCreate ? "fas fa-angle-up" : "fas fa-angle-down"
            }`}
          ></i>{" "}
          <h5>{toggleCreate ? " Cancel " : "Create"} Post</h5>{" "}
          <i
            className={` ${
              toggleCreate ? "fas fa-angle-up" : "fas fa-angle-down"
            }`}
          ></i>
        </div>
      </div>
      <div className="chevron_wrapper">
        <div
          className={`chevron_right ${!isWallRight && "chevron_right_toggle"}`}
          onClick={() => setIsWallRight(!isWallRight)}
        >
          <div className="toggle_chevron">
            <div className="fas fa-chevron-circle-right"></div>
          </div>
        </div>
      </div>
      <div className="wall_right_container">
        <WallRight />
      </div>
    </div>
  );
}
