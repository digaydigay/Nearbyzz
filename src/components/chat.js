import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthProvider";
import Sendmessages from "./Sendmessages";

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
    <div className="chat_container">
      {/* chat head start */}
      <div className="chat_head">
        {/* chat profile start */}
        <div className="chat_profile">
          <div className="profile">
            <div className="profile_image_container">
              <div className="profile_image">
                <img src={currentuser.photoURL} alt="profile" />
              </div>
            </div>
            <div className="profile_name">
              <h3>{currentuser.displayName}</h3>
            </div>
          </div>
        </div>
        {/* chat profile start */}
        {/* chat action start */}
        <div className="chat_action">
          <button>-</button>
          <button>X</button>
        </div>
        {/* chat action end */}
      </div>
      {/* chat head ends */}
      {/* chat body start */}
      <div className="chat_message_contents">
        {messages &&
          messages.map(({ text, uid, photoURL, createdAt }) => {
            return (
              <div
                key={createdAt}
                className={`chat_message_wrapper ${
                  currentuser && uid === currentuser.uid
                    ? "user_message"
                    : "reciever_message"
                }`}
              >
                <div className="profile">
                  <div className="profile_image_container">
                    <div className="profile_image">
                      <img src={photoURL} alt="profile" />
                    </div>
                  </div>
                </div>

                <div className="chat_message">
                  <div className="message">{text}</div>
                </div>
              </div>
            );
          })}
        <div className="scroll" ref={scroll}></div>
        <Sendmessages scroll={scroll} />
      </div>
      {/* chat body ends */}
      {/* chat input start */}

      {/* chat input ends */}
    </div>
  );
}
