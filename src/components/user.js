import React from "react";
import { useAuth } from "../Context/AuthProvider";

export default function User() {
  const { currentuser } = useAuth();

  return (
    <div>
      <a href={`/profile/${currentuser && currentuser.uid}`}>
        <div className="profile_container">
          <div className="profile">
            <div className="profile_image_container">
              <div className="profile_image">
                <img src={currentuser.photoURL} alt="user" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
