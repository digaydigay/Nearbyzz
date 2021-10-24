import React from "react";
import { useAuth } from "../Context/AuthProvider";
import { useState } from "react";
import SearchNearbyzz from "./SearchNearbyzz";

export default function HeaderNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const { onSearchNearbyzz } = SearchNearbyzz();
  const { currentuser } = useAuth();
  const [active, setActive] = useState("home");

  const entertainment = (e) => {
    const { id } = e.target;
    setActive(id);
  };
  return (
    <>
      <div className={`header_navbar ${currentuser && "header_navbar_user"}`}>
        <div className="user_access">
          {/* search start*/}
          <form className="search">
            <button
              type="submit"
              className="search_btn"
              onClick={(e) =>
                onSearchNearbyzz(e, { setShowSearch, showSearch })
              }
            >
              <i className="fas fa-search"></i>
            </button>
            <div
              className={`input_wrapper ${
                showSearch && "input_wrapper_expand"
              }`}
            >
              <input type="text" placeholder="Search Nearbyzz..." />
            </div>
          </form>

          {/* header ends */}
          {/* entertainments start*/}
          <div className="entertainments">
            <div
              className={`entertainment ${
                active === "home" && "entertainment_active"
              }`}
              id="home"
              onClick={entertainment}
            >
              <i className="fas fa-home"></i>
            </div>
            <div
              className={`entertainment ${
                active === "video" && "entertainment_active"
              }`}
              id="video"
              onClick={entertainment}
            >
              <i className="fas fa-video"></i>
            </div>
            <div
              className={`entertainment ${
                active === "music" && "entertainment_active"
              }`}
              id="music"
              onClick={entertainment}
            >
              <i className="fas fa-music"></i>
            </div>

            <div
              className={`entertainment ${
                active === "games" && "entertainment_active"
              }`}
              id="games"
              onClick={entertainment}
            >
              <i className="fas fa-gamepad"></i>
            </div>
          </div>
          {/* entertainments end */}
        </div>
      </div>
    </>
  );
}
