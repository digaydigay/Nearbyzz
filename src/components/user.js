import React from "react";
import { useAuth } from "../Context/AuthProvider";
export default function User() {
  const { currentuser } = useAuth();
  return (
    <div className="profile_container">
      <div className="profile">
        <div className="profile_image_container">
          <div className="profile_image">
            {currentuser && currentuser.photoURL !== null ? (
              <img src={currentuser.photoURL} alt="user" />
            ) : (
              <i className="fas fa-user"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
