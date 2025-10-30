import React, { useState } from "react";

const InfiniteCounterList = () => {
  const [counters, setCounters] = useState([]);

  // Add new counter (starts at 0)
  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), count: 0 }]);
  };

  // Increment a specific counter
  const increment = (id) => {
    setCounters(
      counters.map((c) => (c.id === id ? { ...c, count: c.count + 1 } : c))
    );
  };

  // Decrement a specific counter
  const decrement = (id) => {
    setCounters(
      counters.map((c) => (c.id === id ? { ...c, count: c.count - 1 } : c))
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Infinite Counter List</h2>
      <button onClick={addCounter}>Add Counter</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {counters.map(({ id, count }) => (
          <li key={id} style={{ margin: "10px 0" }}>
            <div
              style={{
                display: "inline-flex",
                gap: "10px",
                alignItems: "center",
              }}>
              <button onClick={() => decrement(id)}>-</button>
              <span>{count}</span>
              <button onClick={() => increment(id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteCounterList;
