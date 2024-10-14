import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(0);

  const runTimer = (seconds, minutes, hourse, tid) => {
    if (seconds > 0) {
      setSeconds((sec) => sec - 1);
    } else if (seconds == 0 && minutes > 0) {
      setMinutes((min) => min - 1);
      setSeconds(59);
    } else {
      setHours((hr) => hr - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (hours == 0 && minutes == 0 && seconds == 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      alert("Time is over");
      clearInterval(timerId);
    }
  };

  useEffect(() => {
    let tid;

    if (isStart) {
      tid = setTimeout(() => {
        runTimer(seconds, minutes, hours, tid);
      }, 1000);
    }
    setTimerId(tid);
    return () => {
      clearTimeout(tid);
    };
  }, [isStart, hours, minutes, seconds]);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds < 0) {
      alert("Invalid Input");
      return;
    } else {
      setIsStart(true);
    }
  };

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours, timerId);
  };

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    if (e.target.id === "hours") {
      setHours(e.target.value);
    } else if (e.target.id === "minutes") {
      setMinutes(e.target.value);
    } else if (e.target.id === "seconds") {
      setSeconds(e.target.value);
    }
  };

  return (
    <>
      <div className="App">
        <h1>CountDown Timer</h1>
        {!isStart && (
          <div>
            <div className="timer-container">
              <input
                type="text"
                id="hours"
                onChange={handleInput}
                placeholder="HH"
              />
              <input
                type="text"
                id="minutes"
                onChange={handleInput}
                placeholder="MM"
              />
              <input
                type="text"
                id="seconds"
                onChange={handleInput}
                placeholder="SS"
              />
            </div>

            <button onClick={handleStart}>Start</button>
          </div>
        )}
      </div>

      <div>
        {isStart && (
          <div>
            <div className="show-container">
              <h1>{hours < 10 ? `0${hours}` : hours}Hr</h1>
              <h1>:</h1>
              <h1>{minutes < 10 ? `0${minutes}` : minutes}Mn</h1>
              <h1>:</h1>
              <h1>{seconds < 10 ? `0${seconds}` : seconds}Se</h1>
            </div>
            <div>
              {!isPaused && <button onClick={handlePause}>Pause</button>}
              {isPaused && <button onClick={handleResume}>Resume</button>}
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
