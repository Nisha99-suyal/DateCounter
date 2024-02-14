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
