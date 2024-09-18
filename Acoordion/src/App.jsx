import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import Comments from "./components/reddit-comments/Comments";
import InfiScroll from "./components/infinite-scroll/infiScroll";
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <Comments /> */}
      <InfiScroll />
    </>
  );
}

export default App;
