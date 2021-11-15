import React from "react";
import { UseToggle } from "../Context/toogle";
import User from "./user";
export default function WallLeft() {
  const { isWallLeft } = UseToggle();

  return (
    <>
      <div className={`left_sidebar ${!isWallLeft && "left_sidebar_off"}`}>
        <ul>
          <li>
            <User />
          </li>
        </ul>
      </div>
    </>
  );
}
