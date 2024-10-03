import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./data.js";
import Folder from "./Folder.jsx";
function App() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    setFiles(data);
    console.log(data);
  }, []);
  return (
    <div className="App">
      <h1>Folder Structure</h1>
      <Folder files={files} />
    </div>
  );
}

export default App;
