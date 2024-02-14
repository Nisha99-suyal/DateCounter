import React from "react";
import { useState } from "react";
function StepWithDateCounter() {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("feb 14 2024");
  date.setDate(date.getDate() + count);
  function handlerReset() {
    setRange(0);
    setCount(0);
  }
  return (
    <div className="border">
      <h1> By input & Range Date Coutner</h1>
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        />
        <span>{range}</span>
      </div>
      <div className="input-section">
        <button onClick={() => setCount((s) => s - range)}>-</button>
        <input
          type="text"
          placeholder="how many days?"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((s) => s + range)}>+</button>
        <h6>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago from today was `}
          <span>{date.toDateString()}</span>
        </h6>
        <button onClick={handlerReset}>Reset</button>
      </div>
    </div>
  );
}

export default StepWithDateCounter;
