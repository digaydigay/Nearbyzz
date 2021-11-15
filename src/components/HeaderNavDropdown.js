import React from "react";
import { auth } from "../firebase";
import { useAuth } from "../Context/AuthProvider";
import { useHistory } from "react-router-dom";
export default function HeaderNavDropdown() {
  const history = useHistory();
  const { currentuser, setProfile } = useAuth();

  return (
    <div className="header_dropdown_main">
      <div className="bar_menu">
        <i className="fas fa-bars"></i>
      </div>

      <ul className="menu_list">
        {/* list start */}
        {currentuser && (
          <li onClick={setProfile}>
            <a href={`/profile/${currentuser && currentuser.uid}`}>
              <div className="profile">
                <div className="profile_image_container">
                  <div className="profile_image">
                    <img src={currentuser.photoURL} alt="user" />
                  </div>
                </div>
                <h5 style={{ color: "white", paddingLeft: "5px" }}>
                  {currentuser.displayName}
                </h5>
              </div>
            </a>
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
