import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // Timer value (in seconds)
  const [isRunning, setIsRunning] = useState(false); // Timer state
  const [isCountDown, setIsCountDown] = useState(false); // Toggle between count-up and count-down
  const [targetTime, setTargetTime] = useState(10); // Countdown target time in seconds

  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Function to pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(isCountDown ? targetTime : 0); // Reset to initial state (0 for count-up, targetTime for countdown)
  };

  // Function to switch between count-up and count-down modes
  const toggleMode = () => {
    setIsCountDown((prevMode) => !prevMode);
    setTime(isCountDown ? 0 : targetTime); // Reset to targetTime when switching to countdown
  };

  // useEffect to handle timer interval and cleanup
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (isCountDown) {
          setTime((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(interval);
              setIsRunning(false);
              return 0;
            }
            return prevTime - 1;
          });
        } else {
          setTime((prevTime) => prevTime + 1);
        }
      }, 1000);
    }

    // Cleanup function to clear the interval on unmount or mode change
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, isCountDown]);

  return (
    <div className="App">
      <h1>{isCountDown ? `Countdown Timer` : `Count-Up Timer`}</h1>
      <div className="timer-display">
        <span>{time}</span>
      </div>
      <div className="controls">
        <button onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={toggleMode}>
          Switch to {isCountDown ? "Count-Up" : "Countdown"}
        </button>
      </div>
      {isCountDown && (
        <div>
          <label>
            Set Countdown Time (seconds):
            <input
              type="number"
              value={targetTime}
              onChange={(e) => setTargetTime(Number(e.target.value))}
              disabled={isRunning}
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default App;
