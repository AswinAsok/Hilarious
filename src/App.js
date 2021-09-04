import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import { getProfile, getRepos } from "./apicall";
import Garden from "./Components/Garden/Garden";

function App() {
  const [username, setUsername] = useState();
  const [profile, setProfile] = useState();
  const [repos, setRepos] = useState();
  const [start, setStart] = useState();

  useEffect(() => {
    if (start) {
      setProfile(getProfile(username));
      setRepos(getRepos(username));
    }
  }, [start, username]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/garden">
            <Garden />
          </Route>
          <Route path="/">
            <Welcome setUsername={setUsername} setStart={setStart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
