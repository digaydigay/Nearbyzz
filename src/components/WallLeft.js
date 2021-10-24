import React from "react";
import { UseToggle } from "../Context/toogle";
import User from "./user";
export default function WallLeft() {
  const { isWallLeft } = UseToggle();
  return (
    <div className={`left_sidebar ${!isWallLeft && "left_sidebar_off"}`}>
      <ul>
        <li>
          <User />
        </li>
        <li>
          <div className="friends">
            <div className="fas fa-user-friends"></div>
          </div>
        </li>
        <li className="groups">
          <div className="fas fa-users"></div>
        </li>
        <li className="page">
          <div className="fas fa-flag"></div>
        </li>
      </ul>
    </div>
  );
}
