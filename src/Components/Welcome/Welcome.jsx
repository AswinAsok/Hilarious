import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome({ setUsername, setStart }) {
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
          <Link to="/garden">
            <button
              onClick={() => {
                setStart(true);
              }}
              className="start"
            >
              Start Exploring
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
