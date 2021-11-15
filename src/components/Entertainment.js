import { useState } from "react";
export default function Entertainment() {
  const [active, setActive] = useState("home");
  const entertainment = (e) => {
    const { id } = e.target;
    setActive(id);
  };

  return (
    <div className="entertainments">
      <a href="/">
        <div
          className={`entertainment ${
            active === "home" && "entertainment_active"
          }`}
          id="home"
          onClick={entertainment}
        >
          <i className="fas fa-home"></i>
        </div>
      </a>
      <div
        className={`entertainment ${
          active === "video" && "entertainment_active"
        }`}
        id="video"
        onClick={entertainment}
      >
        <i className="fas fa-video"></i>
      </div>
      <div
        className={`entertainment ${
          active === "music" && "entertainment_active"
        }`}
        id="music"
        onClick={entertainment}
      >
        <i className="fas fa-music"></i>
      </div>

      <div
        className={`entertainment ${
          active === "games" && "entertainment_active"
        }`}
        id="games"
        onClick={entertainment}
      >
        <i className="fas fa-gamepad"></i>
      </div>
    </div>
  );
}
