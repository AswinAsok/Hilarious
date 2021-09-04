import "./App.css";
import { useState, useEffect } from "react";
import Welcome from "./Components/Welcome/Welcome";
import { getProfile } from "./apicall";

function App() {
  const [username, setUsername] = useState();
  const [profile, setProfile] = useState();
  const [start, setStart] = useState();

  useEffect(() => {
    setProfile(getProfile(username));
  }, [start]);

  return (
    <div className="App">
      <Welcome setUsername={setUsername} setStart={setStart} />
    </div>
  );
}

export default App;
