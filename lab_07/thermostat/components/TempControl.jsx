import React from 'react';

function TempControl(props) {
  function handleIncrease() {
    props.onTempChange(props.celsius + 1);
  }

  function handleDecrease() {
    props.onTempChange(props.celsius - 1);
  }

  return (
    <div>
      <button onClick={handleDecrease} className='decrease'>- Decrease</button>
      <button onClick={handleIncrease} className='increase'>+ Increase</button>
    </div>
  );
}

export default TempControl;
