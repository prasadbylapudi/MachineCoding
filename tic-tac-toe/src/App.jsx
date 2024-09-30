import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [won, setWon] = useState(null);
  const [winningConditions, setWinningConditions] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]);

  const handlePlayerClick = (e) => {
    const index = e.target.id;
    console.log(index);
    if (board[index] || won) return;
    const copyMatrix = [...board];
    copyMatrix[index] = xTurn ? "X" : "O";

    setBoard(copyMatrix);
    setXTurn(!xTurn);
  };

  function decideWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // console.log(board[a]);
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("won the game", board[a]);
        setWon(board[a]);
        alert(`${board[a]} won the game`);
        return;
      }
    }
    if (board.every((square) => square !== null) && !won) {
      setWon("draw"); // If all squares are filled and no winner
      alert("Game is draw");
    }
  }

  useEffect(() => {
    decideWinner();
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWon(null);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((item, index) => {
          return (
            <div
              key={index}
              id={index}
              className="box"
              onClick={handlePlayerClick}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="game-info">
        <button onClick={resetGame}>Reset</button>
        <div>Next Player : {xTurn ? "X" : "O"}</div>
        <div>
          {won === "draw" ? "It's a draw!" : `Player - ${won} won the game`}
        </div>
      </div>
    </div>
  );
}

export default App;
