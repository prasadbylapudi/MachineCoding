import { useState } from "react";
import "./App.css";

const theatreData = [
  { name: "VIP", rows: 5, seatsPerRow: 5 },
  { name: "General", rows: 6, seatsPerRow: 6 },
  { name: "Economy", rows: 8, seatsPerRow: 8 },
];

function App() {
  const [theatres, setTheatres] = useState(theatreData);

  return (
    <div className="App">
      <h1>Ticket Booking</h1>

      {theatreData.map((theatre) => {
        return (
          <div key={theatre.name}>
            <h2>
              {theatre.name} Section ({theatre.rows}X{theatre.seatsPerRow})
            </h2>

            <div className="seat-grid">
              {[...Array(theatre.rows)].map((_, rowIndex) => {
                return <div key={rowIndex}>{rowIndex}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
