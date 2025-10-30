import React, { useState, useEffect } from 'react';
import TimeSetter from './components/TimeSetter';
import TimerDisplay from './components/TimerDisplay';
import ControlButtons from './components/ControlButtons';
import TimerComplete from './components/TimerComplete';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Update timer on input change
  useEffect(() => {
    if (!hasStarted) {
      setTotalSeconds(minutes * 60 + seconds);
    }
  }, [minutes, seconds, hasStarted]);

  // Countdown 
  useEffect(() => {
    let timer;
    
    if (isRunning && totalSeconds > 0) {
      timer = setInterval(() => {
        setTotalSeconds(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [isRunning, totalSeconds]);

  function handleStart() {
    if (totalSeconds > 0) {
      setIsRunning(true);
      setHasStarted(true);
    }
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setIsComplete(false);
    setHasStarted(false);
    setTotalSeconds(minutes * 60 + seconds);
  }

  const hasTime = minutes > 0 || seconds > 0;

  return (
    <div className="app">
      <h1>Countdown Timer</h1>

      <TimeSetter
        minutes={minutes}
        seconds={seconds}
        onMinutesChange={setMinutes}
        onSecondsChange={setSeconds}
        disabled={hasStarted}
      />

      <TimerDisplay totalSeconds={totalSeconds} />

      <ControlButtons
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        hasTime={hasTime}
      />

      {isComplete && <TimerComplete onReset={handleReset} />}
    </div>
  );
}

export default App;