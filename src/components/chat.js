import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthProvider";

export default function Chat() {
  const { currentuser } = useAuth();
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    async function query() {
      try {
        db.collection("messages")
          .orderBy("createdAt")
          .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
          });
      } catch (e) {
        console.log(e);
      }
    }
    query();
  }, []);
  return (
    <div className="chat_container" style={{ color: "black" }}>
      <div className="chat_message_contents">
        {messages &&
          messages.map(({ text, uid, photoURL, createdAt, displayName }) => {
            return (
              <div
                key={createdAt}
                className={`chat_message_wrapper ${
                  currentuser && uid === currentuser.uid
                    ? "user_message"
                    : "not_user_message"
                }`}
              >
                <div className="profile_image_container">
                  <div className="profile_image">
                    {photoURL ? (
                      <img src={photoURL} alt="profile" />
                    ) : (
                      <h5>{displayName.slice(0, 1)}</h5>
                    )}
                  </div>
                </div>

                <div className="chat_message">
                  <div className="message">{text}</div>
                </div>
              </div>
            );
          })}
        <div className="scroll" ref={scroll}></div>
      </div>
      {/* chat body ends */}
      {/* chat input start */}

      {/* chat input ends */}
    </div>
  );
}
