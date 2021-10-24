import React from "react";
import { UseToggle } from "../Context/toogle";
import User from "./user";
export default function WallLeft() {
  const { isWallLeft } = UseToggle();
  return (
    <div className={`left_sidebar ${!isWallLeft && "left_sidebar_off"}`}>
      <ul className="user_economy">
        <li className="economy">
          <User />
        </li>
        <li className="economy">
          <div className="users">
            <div className="fas fa-user-friends"></div>
          </div>
        </li>
        <li className="economy">
          <div className="fas fa-users"></div>
        </li>
        <li className="economy">
          <div className="fas fa-flag"></div>
        </li>
      </ul>
    </div>
  );
}
