import { useState } from "react";
import "./App.css";
import LongPollingComponent from "./LongPolling";
function App() {
  return (
    <div className="App">
      <h1>Short Polling and Long polling</h1>
      <LongPollingComponent />
    </div>
  );
}

export default App;
