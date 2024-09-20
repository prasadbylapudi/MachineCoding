import { useState } from "react";
import "./App.css";
import Comments from "./components/comments";
function App() {
  return (
    <>
      <h1>Reddit Comments</h1>
      <Comments />
    </>
  );
}

export default App;
