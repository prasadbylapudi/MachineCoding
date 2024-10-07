import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode(!darkMode);
    console.log("mode", darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <h1>Dark Mode</h1>

      <button onClick={handleTheme}>Light / Dark Mode</button>
    </div>
  );
}

export default App;
