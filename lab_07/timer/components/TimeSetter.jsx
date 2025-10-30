import React from 'react';

function TimeSetter({ minutes, seconds, onMinutesChange, onSecondsChange, disabled }) {
  return (
    <div className="time-setter">
      <h3>Set Timer</h3>
      <div className="time-inputs">
        <label>
          Minutes:
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => onMinutesChange(Number(e.target.value) || 0)}
            disabled={disabled}
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => onSecondsChange(Number(e.target.value) || 0)}
            disabled={disabled}
          />
        </label>
      </div>
    </div>
  );
}

export default TimeSetter;