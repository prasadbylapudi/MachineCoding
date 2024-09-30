import { useState } from "react";

import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log("rating,hover", rating, hover);
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <div>
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <button
              key={num}
              onClick={() => {
                setRating(num);
              }}
              onMouseOver={() => setHover(num)}
              onMouseOut={() => setHover(rating)}
            >
              <span
                className={`star ${
                  num <= (hover || rating) ? "highlighted" : "off"
                } `}
              >
                &#9733;
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
