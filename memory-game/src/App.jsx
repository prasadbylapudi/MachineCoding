import { useEffect, useState } from "react";
import "./App.css";

const row = 8;

const getNums = () => {
  let nums = [];
  for (let i = 0; i < row; i++) {
    nums.push(i + 1);
    nums.push(i + 1);
  }
  return nums;
};

function App() {
  const [gameState, setGameState] = useState("init");

  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);

  console.log(solvedList, "solvedList");

  const [nums, setNums] = useState(getNums());

  useEffect(() => {
    if (opened.length === 2) {
      //if two equal
      //if two are different.
      setTimeout(() => {
        const index1 = opened[0];
        const index2 = opened[1];

        if (nums[index1] === nums[index2]) {
          //if equal remove cards
          setSolvedList((prev) => [...prev, nums[index1]]);
          // return;
        }
        setOpened([]);
      }, 1000);
    }
  }, [opened]);

  useEffect(() => {
    if (solvedList.length === 8) {
      setGameState("win");
    }
  }, [solvedList]);

  const getClassName = (num, i) => {
    if (solvedList.includes(num)) {
      return "remove";
    } else if (opened.includes(i)) {
      return "show";
    } else {
      return "hide";
    }
  };

  const getRandomNum = () => {
    const copyNums = [...nums];
    return copyNums.sort(() => Math.random() - 0.5);
  };

  const handleStart = () => {
    setNums(getRandomNum());
    setGameState("play");
    setSolvedList([]);
  };

  const handleClick = (num, i) => {
    if (opened.length == 2) {
      return;
    }
    console.log(num, i);
    setOpened((prev) => [...prev, i]);
  };

  console.log(opened, "opened");

  return (
    <>
      <h1>Memory Game</h1>
      {gameState === "init" && (
        <div>
          <button onClick={handleStart}>Play</button>
          {/* <button onClick={() => setGameState("reset")}>Reset</button> */}
        </div>
      )}

      {gameState === "play" && (
        <div className="memoryGame-conainer">
          {/* {[...Array(row)].map((_, i) => {
            return [...Array(col)].map((__, j) => {
              return <div key={`${i}-${j}`} className="memoryGame-box"></div>;
            });
          })} */}

          {nums.map((num, i) => {
            return (
              <div
                key={i}
                className={`memoryGame-box  ${getClassName(num, i)} `}
                onClick={() => {
                  handleClick(num, i);
                }}
              >
                {num}
              </div>
            );
          })}
        </div>
      )}

      {gameState === "win" && (
        <div>
          <h1>You Win</h1>
          <button onClick={handleStart}>Play Again</button>
        </div>
      )}
    </>
  );
}

export default App;
