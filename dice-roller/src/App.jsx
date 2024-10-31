import { useState } from "react";
import "./App.css";
import Dice from "./Dice";
function App() {
  const [dices, setDices] = useState(1);
  const [rolls, setRolls] = useState(Array(dices).fill(null));
  const [isRolled, setIsRolled] = useState(false);
  console.log(dices);
  const handleRoll = (e) => {
    e.preventDefault();
    let randomValues = Array.from(
      { length: dices },
      () => Math.floor(Math.random() * 6) + 1
    );
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
    </>
  );
}

export default App;
