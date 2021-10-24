import React from "react";
import { useAuth } from "../Context/AuthProvider";
// components
import Notification from "./Notification";
import Entertainment from "./Entertainment";
import SearchNearbyzz from "./SearchNearbyzz";
export default function HeaderNavbar() {
  const { currentuser } = useAuth();
  return (
    <>
      <div className={`header_navbar ${currentuser && "header_navbar_user"}`}>
        <div className="user_access">
          {/* search start*/}
          <SearchNearbyzz />
          {/* Search ends */}
          {/* entertainments start*/}
          <Entertainment />
          {/* entertainments end */}
          {/* norication start */}
          <Notification />
          {/* notification ends */}
        </div>
      </div>
    </>
  );
}
