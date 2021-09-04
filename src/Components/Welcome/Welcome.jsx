import React from "react";
import "./Welcome.css";

function Welcome({ username, setUsername }) {
  return (
    <div>
      <div className="main-container">
        <p className="welcome-text">Welcome to the GitGarden.</p>
        <p className="tagline">Satuday Hack Night</p>
        <div className="input-div">
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            className="userinp"
            placeholder="Username"
            type="text"
          />
        </div>
        
        <div>
          <button className="start">Start Exploring</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
