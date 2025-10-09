//  1. Counter Component
//  Create a component with a number displayed and two buttons: one to
//  increment the number by 1 and one to decrement it by 1. Use useState
//  to manage the count.



import React from "react";
import { useState } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
};
export default Counter;
