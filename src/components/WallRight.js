import React from "react";
import { UseToggle } from "../Context/toogle";
export default function WallLeft() {
  const { isWallRight } = UseToggle();
  return (
    <div className={`right_sidebar ${!isWallRight && "right_sidebar_off"}`}>
      <ul>
        <li>
          <div className="message_btn">
            <i className="fas fa-comment"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}
