import React from "react";

import User from "./user";

// components
import Sendmessages from "./Sendmessages";
import HeaderNavbar from "./HeaderNavbar";
export default function Convos() {
  let date = new Date();
  return (
    <div className="convos_main">
      <div className="convos_container">
        <div className="nav">
          <HeaderNavbar />
        </div>

        {/*  convos header start*/}
        <div className="convos_header">
          <div className="convos_header_right">
            <div className="convos_btn">
              <i className="fas fa-comment"></i>
            </div>
            <h5>Convos</h5>
          </div>
          <div className="convos_header_left">
            <div className="dropdown_menu">
              <div className="dropdown_btn">
                <i className="fas fa-caret-down"></i>
              </div>
              <ul className="convo_settings">
                <li>Spam message</li>
                <li>Block Message</li>
                <li>Message Request</li>
                <li>Settings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* convos header ends */}
        {/* convo friends start*/}
        <div className="active_friends_section">
          <div className="profile_section">
            <User />
            <div className="dropdown_menu">
              <i className="fas fa-ellipsis-v"></i>
              <ul>
                <li>Change User</li>
              </ul>
            </div>
          </div>
          <div className="active_freinds">
            <h5>Active Freinds</h5>
            <div className="active_friend_wrapper">
              <ul className="friends">
                <li className="use"></li>
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
                <User />
                <div className="message_content">
                  <div className="name">
                    <h5>Jonthan Digay</h5>
                  </div>
                  <div className="message_text">
                    <h6 style={{ fontWeight: "bold" }}>Message:</h6>
                    <h6>Hello Jonathan hav a nice day</h6>
                  </div>

                  <div className="time">
                    <h6>
                      {date.getDate()} / {date.getDay()} / {date.getFullYear()}
                    </h6>
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
                <div className="coversation_messages"></div>
                <div className="conversaton_action">
                  <Sendmessages />
                </div>
              </div>
              {/* conversation  ends*/}
            </div>

            {/* conversation ends */}
            {/* active_convo_message */}
          </div>
          {/* active_convo_message_main */}
        </div>
      </div>
    </div>
  );
}
