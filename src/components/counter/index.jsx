// 2. **State and Events**

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
