import "./App.css";
import { useState } from "react";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  const [username, setUsername] = useState();
  return (
    <div className="App">
      <Welcome setUsername={setUsername} />
    </div>
  );
}

export default App;
