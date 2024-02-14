import React, { useState } from "react";

export default function DateCounter() {
  const [count, setCount] = useState(0);
  const date = new Date("feb 14 2024");
  date.setDate(date.getDate() + count);
  return (
    <div className="border">
      <h1>Date Counter</h1>
      <div className="Counter-section">
        <button onClick={() => setCount((s) => s - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((s) => s + 1)}>+</button>
      </div>
      <h6>
        {count === 0
          ? `Today is `
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </h6>
    </div>
  );
}
