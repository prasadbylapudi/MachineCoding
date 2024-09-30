import { useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";
import { useEffect } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => {
      clearTimeout(time);
    };
  }, [progress]);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} color="lightGreen" />
      <ProgressBar progress={progress} color="yellow" />
      <ProgressBar progress={progress} color="lightPink" />
    </div>
  );
}

export default App;
