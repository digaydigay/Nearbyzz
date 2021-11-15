import React, { useEffect, useState } from "react";
import { UseToggle } from "../Context/toogle";
import { useAuth } from "../Context/AuthProvider";
import { db } from "../firebase";

export default function WallRight() {
  const { currentuser } = useAuth();
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function query() {
      try {
        db.collection("users")
          .orderBy("createdAt")
          .onSnapshot((snapshot) => {
            setusers(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (e) {
        console.log(e);
      }
    }
    query();
  }, []);

  const { isWallRight } = UseToggle();
  return (
    <div className={`right_sidebar ${!isWallRight && "right_sidebar_off"}`}>
      <a href={`/convos/${currentuser.uid}`}>
        <div className="message">
          <div className="convos_btn">
            <i className="fas fa-comment"></i>
          </div>
        </div>
      </a>
      <ul className="users">
        {users &&
          users.map(({ displayName, photoURL, uid }) => {
            if (currentuser.uid === uid) return null;
            return (
              <div key={uid}>
                <a href={`/profile/${uid}`}>
                  <li>
                    <div className="user">
                      <div className="user_image">
                        <img src={photoURL} alt="profile" />
                      </div>
                      <h5 className="user_displayName">{displayName}</h5>
                    </div>
                  </li>
                </a>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
