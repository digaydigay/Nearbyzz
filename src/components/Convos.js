import React from "react";

export default function Messages() {
  return (
    <div className="convos_wrapper">
      {/*  convos header start*/}
      <div className="convos_header">
        <div className="convos_header_right">
          <h5>Convos</h5>
        </div>
        <div className="left">
          <i className="fas fa-caret-down"></i>
        </div>
      </div>

      {/* convos header ends */}
      {/* convo friends start*/}

      <div className="convo_friends"></div>
      {/* convo friends ends */}

      {/* convo body starts */}

      {/* convo body ends */}
    </div>
  );
}
