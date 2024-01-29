import React, {useState} from 'react';


function Counter() {
  const [count, setCount] =useState(0);

  // for increment of counter
  const increment = () => {
    setCount(count + 1);
  }

  // for decrement of counter
  const decrement = () => {
    setCount(count - 1);
  }

  // for reset of counter
  const reset = () => {
    setCount(0);
  }

  return(
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;