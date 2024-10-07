import { useState } from "react";

import "./App.css";
import Checkbox from "./components/Checkbox";

import usePasswordGenerator from "./hooks/use-password-generator";

function App() {
  const [length, setLength] = useState(8);

  const [checkBoxData, setCheckBoxData] = useState([
    { name: "Include Uppercase Letters", checked: false },
    { name: "Include Lowercase Letters", checked: false },
    { name: "Include Numbers", checked: false },
    { name: "Include Symbols", checked: false },
  ]);

  const handleCheckboxChange = (index) => {
    const newCheckBoxData = [...checkBoxData];
    newCheckBoxData[index].checked = !newCheckBoxData[index].checked;
    setCheckBoxData(newCheckBoxData);
    console.log(newCheckBoxData);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    console.log("copied to clipboard", text);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <>
      <div>
        <h2>Password Generator & content is editable</h2>

        <div className="range-input">
          <div>
            <button
              style={{
                width: "70px",
                backgroundColor: "lightblue",
                textAlign: "center",
              }}
              onClick={() => copyToClipboard(password)}
            >
              Copy
            </button>
          </div>
          <h1>
            Your Generated Password is :{" "}
            <span id="password" contentEditable="true">
              {password}
            </span>
          </h1>
          <span>
            <label htmlFor="length">Length</label>
            <label>{length}</label>
          </span>{" "}
          <br />
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="checkbox-container">
          {checkBoxData.map((checkbox, index) => {
            return (
              <Checkbox
                title={checkbox.name}
                key={index}
                onChange={() => handleCheckboxChange(index)}
                state={checkbox.checked}
              />
            );
          })}
        </div>

        <div className="generateBtn">
          <button onClick={() => generatePassword(checkBoxData, length)}>
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
