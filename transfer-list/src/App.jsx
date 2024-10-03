import { useState } from "react";

import "./App.css";
import { data } from "./data.js";
function App() {
  const [leftItems, setLeftItems] = useState([...data]);
  const [rightItems, setRightItems] = useState([]);

  const checkedList = (list, id, checked) => {
    return list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !checked,
        };
      } else {
        return item;
      }
    });
  };

  const handleClick = (id, checked, direction) => {
    console.log("clicked", id, checked, direction);
    if (direction === "LEFT") {
      let copyList = [...leftItems];
      copyList = checkedList(copyList, id, checked);
      console.log("LEFT", copyList);
      setLeftItems(copyList);
    } else {
      let copyList = [...rightItems];
      copyList = checkedList(copyList, id, checked);
      console.log("RIGHT", copyList);
      setRightItems(copyList);
    }
  };

  const resetItems = (list) => {
    return list.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });
  };

  const handleTransferBtn = (dir) => {
    console.log("transfer", dir);
    if (dir === "LEFT_TO_RIGHT") {
      console.log("left items", leftItems);
      if (leftItems.length) {
        const copyList = [...leftItems];
        const checkedItems = copyList.filter((item) => item.checked);
        const unCheckedItems = copyList.filter((item) => !item.checked);
        setRightItems(resetItems([...rightItems, ...checkedItems]));
        setLeftItems(unCheckedItems);
      }
    } else {
      if (rightItems.length) {
        const copyList = [...rightItems];
        const checkedItems = copyList.filter((item) => item.checked);
        const unCheckedItems = copyList.filter((item) => !item.checked);
        setLeftItems(resetItems([...leftItems, ...checkedItems]));
        setRightItems(unCheckedItems);
      }
    }
  };

  return (
    <div className="App">
      <h1>Transfer List</h1>
      <div className="transfer-list">
        <div className="left-items">
          <h2 style={{ borderBottom: "1px solid black" }}>Left Items</h2>
          {leftItems.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={`item ${item.checked ? "checked" : null} `}
              onClick={() => handleClick(item.id, item.checked, "LEFT")}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="transfer-button">
          <button onClick={() => handleTransferBtn("LEFT_TO_RIGHT")}>
            Left2Right
          </button>
          <button onClick={() => handleTransferBtn("RIGHT_TO_LEFT")}>
            Right2Left
          </button>
        </div>
        <div className="right-items">
          <h2 style={{ borderBottom: "1px solid black" }}>Right Items</h2>
          {rightItems?.map((item) => (
            <div
              key={item.id}
              className={`item ${item.checked ? "checked" : null} `}
              id={item.id}
              onClick={() => handleClick(item.id, item.checked, "RIGHT")}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
