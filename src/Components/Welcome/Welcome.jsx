import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div>
      <div className="main-container">
        <p className="welcome-text">Welcome to the GitGarden.</p>
        <p className="tagline">Satuday Hack Night</p>
        <button className="start">Start Exploring</button>
      </div>
    </div>
  );
}

export default Welcome;
