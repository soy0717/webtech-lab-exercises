import React from 'react';

function TimerDisplay({ totalSeconds }) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return (
    <div className="timer-display">
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}

export default TimerDisplay;