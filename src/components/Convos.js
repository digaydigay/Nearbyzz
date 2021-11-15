import React, { useState } from "react";
import User from "./user";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
// components
import Sendmessages from "./Sendmessages";
import Chat from "./chat";
import { useEffect } from "react/cjs/react.development";
export default function Convos() {
  const [chats, setChats] = useState([]);
  console.log(chats);

  useEffect(() => {
    const chatList = async () => {
      try {
        await db.collection("users").onSnapshot((snap) => {
          setChats(snap.docs.map((doc) => doc.data()));
        });
      } catch {
        return false;
      }
    };
    chatList();
  }, []);

  const { id } = useParams();

  return (
    <div className="convos_main">
      <div className="convos_container">
        {/* convo friends start*/}
        <div className="users_section">
          <div className="currentUser_section">
            <User />
            <div className="dropdown_menu">
              <i className="fas fa-ellipsis-v"></i>
              <ul>
                <li>Setting</li>
              </ul>
            </div>
          </div>
          <div className="users">
            <div className="users_wrapper">
              <ul className="user">
                {chats &&
                  chats.map(({ uid, photoURL, displayName }) => {
                    if (id === uid) return false;
                    return (
                      <li key={uid}>
                        <img src={photoURL} alt="user" />
                        <p>{displayName}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        {/* convo friends ends */}

        {/*convos_messages_main*/}
        <div className="convos_messages_main">
          {/*  convos_messages*/}
          <ul className="convos_messages">
            <li>
              <div className="message">
                <div className="message_dp">
                  <User />
                </div>

                <div className="message_content">
                  <div className="name">
                    <h5>Jonthan Digay</h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/*  convos_messages*/}

          {/* active_convo_message_main */}
          <div className="active_convo_message_main">
            {/* active_convo_message */}
            <div className="active_convo_messages_wrapper">
              {/* active_convo_header */}
              <div className="active_convo_header">
                <div className="left">
                  <User />
                  <h5>John Doe</h5>
                </div>

                <div className="right">
                  <div className="action">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="action">
                    <i className="fas fa-video"></i>
                  </div>
                  <div className="action">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
              {/* active_convo_header */}
              {/* conversation  start*/}
              <div className="conversation">
                <div
                  className="coversation_messages"
                  style={{ color: "black" }}
                >
                  <Chat />
                </div>
              </div>
              {/* conversation  ends*/}
              <div className="conversaton_action">
                <Sendmessages />
              </div>
            </div>

            {/* active_convo_message */}
          </div>

          {/* active_convo_message_main */}
        </div>
      </div>
    </div>
  );
}
