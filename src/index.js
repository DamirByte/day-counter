import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

function App() {
  return <CounterDate />;
}

function CounterDate() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const message =
    counter > 0
      ? "days from today is"
      : counter === 0
      ? "Today is"
      : "days ago was";

  const newDate = new Date(Date.now() + counter * (24 * 60 * 60 * 1000));

  function resetCounter() {
    setStep(1);
    setCounter(0);
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(+e.target.value)}
          />
          <p>{step}</p>
        </div>
        <div className="wrapper">
          <button onClick={() => setCounter((c) => c - step)}>-</button>
          <input
            type="text"
            value={counter}
            onChange={(e) => setCounter(+e.target.value)}
          />
          <button onClick={() => setCounter((c) => c + step)}>+</button>
        </div>
        <p>
          {counter !== 0 && Math.abs(counter)} {message}{" "}
          {newDate.toDateString()}
        </p>
      </div>
      {(counter !== 0 || step !== 1) && (
        <button className="resetBtn" onClick={resetCounter}>
          Reset
        </button>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
