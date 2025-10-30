import React from 'react';

function TimerComplete({ onReset }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Time's Up!</h2>
        <p>Your countdown timer has finished.</p>
        <button onClick={onReset}>
          Set New Timer
        </button>
      </div>
    </div>
  );
}

export default TimerComplete;