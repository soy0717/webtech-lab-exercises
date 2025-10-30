import React from 'react';

function ControlButtons({ isRunning, onStart, onStop, onReset, hasTime }) {
  return (
    <div className="buttons">
      <button
        className="start-btn"
        onClick={onStart}
        disabled={!hasTime || isRunning}
      >
        Start
      </button>
      
      <button
        className="stop-btn"
        onClick={onStop}
        disabled={!isRunning}
      >
        Stop
      </button>
      
      <button
        className="reset-btn"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default ControlButtons;