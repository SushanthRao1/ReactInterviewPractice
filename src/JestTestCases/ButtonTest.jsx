import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('')
  
  return (
    <div>
      <h2 data-testid="count-value">Count: {count}</h2>
      <input 
        type='text'
        data-testid="count-InputField"
        placeholder="Enter Count"
        onChange={()=> {setInputValue(e.target.value)}}
       />
      <button
        data-testid="increment-btn"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>

      <button
        data-testid="decrement-btn"
        onClick={() => setCount((count) => count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
