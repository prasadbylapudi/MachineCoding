import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [undo, setUndo] = useState(false);
  const [redo, setRedo] = useState(false);
  const [redoList, setRedoList] = useState([]);

  const [history, setHistory] = useState([]);
  const [undoCount, setUndoCount] = useState(0);

  const handleUndo = () => {
    //LIFO
    if (history.length) {
      setUndoCount((prev) => prev + 1);
      if (undoCount + 1 > 5) {
        alert("You can only undo 5 times");
        return;
      }
      const copyData = [...history];
      const firstItem = copyData.shift();
      setHistory(copyData);
      setCount(firstItem.oldCount);

      const copyRedoList = [...redoList];
      copyRedoList.push(firstItem);
      setRedoList(copyRedoList);
    }
  };
  console.log(redoList, "redoList");

  const handleRedo = () => {
    if (redoList.length) {
      const copyRedoList = [...redoList];
      const poppedValue = copyRedoList.pop();
      setRedoList(copyRedoList);
      const { action, oldCount, newCount } = poppedValue;
      setCount(newCount);
      maintainHistory(action, oldCount, newCount);
    }
  };

  const maintainHistory = (num, oldCount, newCount) => {
    const obj = {
      action: num,
      oldCount,
      newCount,
    };
    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
    console.log("history", history);
  };
  const handleCounter = (num) => {
    maintainHistory(num, count, count + num);
    setCount((prev) => prev + num);
  };

  console.log("history", history);

  return (
    <>
      <div>
        <h1>Undoable Counter</h1>
        <div className="undo">
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleRedo}>Redo</button>
        </div>
        <div className="undoable-counter">
          <button
            onClick={() => {
              handleCounter(-100);
            }}
          >
            -100
          </button>
          <button
            onClick={() => {
              handleCounter(-10);
            }}
          >
            -10
          </button>
          <button
            onClick={() => {
              handleCounter(-1);
            }}
          >
            -1
          </button>
          <button style={{ backgroundColor: "red" }}>{count}</button>
          <button
            onClick={() => {
              handleCounter(+1);
            }}
          >
            +1
          </button>
          <button onClick={() => handleCounter(+10)}>+10</button>
          <button onClick={() => handleCounter(+100)}>+100</button>
        </div>
      </div>
      <div className="history">
        <h1>History</h1>
        {history.map((item, i) => {
          return (
            <div key={i}>
              {item.action}
              <div> {`[${item.oldCount} -> ${item.newCount}]`} </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
