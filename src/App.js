import "./App.css";
import { useState } from "react";
import DateCounter from "./components/DateCounter";
import StepWithDateCounter from "./components/StepWithDateCounter";

function App() {
  return (
    <div className="App">
      <DateCounter />
      <StepWithDateCounter />
    </div>
  );
}

export default App;

// function Counter() {
//   return (
//     <div className="step-section">
//       <button onClick={setStep((s) => s - 1)}>-</button>
//       <h4>Step: {step}</h4>
//       <button onClick={setStep((s) => s + 1)}>+</button>
//     </div>
//   );
// }
