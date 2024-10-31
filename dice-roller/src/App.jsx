import { useState } from "react";
import "./App.css";
import Dice from "./Dice";
function App() {
  const [dices, setDices] = useState(1);
  const [rolls, setRolls] = useState(Array(dices).fill(null));
  const [isRolled, setIsRolled] = useState(false);
  const [history, setHistory] = useState([]);
  console.log(dices);
  const handleRoll = (e) => {
    e.preventDefault();
    let randomValues = Array.from(
      { length: dices },
      () => Math.floor(Math.random() * 6) + 1
    );
    // setHistory([...history, randomValues]);
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, randomValues];
      return newHistory.slice(-10);
    });

    setRolls(randomValues);
    setIsRolled(true);
    console.log(randomValues);
  };
  return (
    <>
      <h1>Dice Roller</h1>
      <div className="dice-roller">
        <form>
          <label>Number of dices:</label>
          <br />
          <br />
          <input
            type="number"
            placeholder="Number of dices"
            value={dices}
            required
            onChange={(e) => setDices(e.target.value)}
          />
          <br /> <br />
          <button onClick={handleRoll}>Roll</button>
        </form>
      </div>
      <div className="dice-container">
        {isRolled &&
          rolls.map((val, index) => {
            return <Dice val={val} key={index} />;
          })}
      </div>

      <div className="dice-history">
        <h2>History</h2>
        <ul>
          {history.map((val, index) => {
            return (
              <li
                key={index}
                className=""
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "2px solid black",
                }}
              >
                {val.map((item, index) => {
                  return <Dice val={item} key={index} />;
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
