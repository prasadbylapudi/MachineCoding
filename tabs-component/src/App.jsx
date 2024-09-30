import { useState } from "react";
import Tabs from "./Tabs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tabs>
        <div title="Home">Tab content for Home</div>
        <div title="About">Tab content for About</div>
        <div title="Contact">Tab content for Contact</div>
      </Tabs>
    </div>
  );
}

export default App;
