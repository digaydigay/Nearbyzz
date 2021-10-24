import React from "react";
import { auth } from "../firebase";
import { useAuth } from "../Context/AuthProvider";
import { useHistory } from "react-router-dom";

export default function HeaderNavDropdown() {
  const history = useHistory();
  const { currentuser } = useAuth();
  return (
    <div className="header_dropdown_main">
      <div className="bar_menu">
        <i className="fas fa-bars"></i>
      </div>

      <ul className="menu_list">
        {/* list start */}
        {currentuser && (
          <li>
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
              <h5>{currentuser.displayName}</h5>
            </div>
          </li>
        )}
        {currentuser && (
          <li>
            <div>
              <i className="fas fa-comment-alt"></i> <h5>Give Feedback</h5>
              <h6>Help us to improve Nearbyzz</h6>
            </div>
          </li>
        )}

        {currentuser && (
          <li>
            <div>
              <i className="fas fa-cogs"></i> <h5>Settings</h5>
            </div>
          </li>
        )}
        {currentuser && (
          <li>
            <div>
              <i className="fas fa-question-circle"></i>{" "}
              <h5>Privacy and Support</h5>
            </div>
          </li>
        )}

        {/* list ends */}
        {/* list start */}
        {!currentuser && (
          <li onClick={() => history.push("/signin")}>Sign In </li>
        )}
        {/* list ends */}
        {/* list start */}

        {currentuser ? (
          <li
            className="signout"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </li>
        ) : (
          <li onClick={() => history.push("/signup")}>Sign Up </li>
        )}

        {/* list ends */}
      </ul>
    </div>
  );
}
