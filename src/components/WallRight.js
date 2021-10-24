import React from "react";
import { UseToggle } from "../Context/toogle";
import User from "./user";
export default function WallLeft() {
  const { isWallRight } = UseToggle();
  return (
    <div className={`right_sidebar ${!isWallRight && "right_sidebar_off"}`}>
      <ul className="user_economy">
        <li className="economy">
          <div className="fas fa-messages"></div>
        </li>
        <li className="economy">
          <User />
        </li>
        <li className="economy">
          <User />
        </li>
        <li className="economy">
          <User />
        </li>
      </ul>
    </div>
  );
}
