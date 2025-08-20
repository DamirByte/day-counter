import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

function App() {
  return <CounterDate />;
}

function CounterDate() {
  const [step, setStep] = useState(5);
  const [counter, setCounter] = useState(step);

  const message =
    counter > 0
      ? "days from today is"
      : counter === 0
      ? "Today is"
      : "days ago was";

  const newDate = new Date(Date.now() + counter * (24 * 60 * 60 * 1000));

  return (
    <div className="container">
      <div className="wrapper">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="wrapper">
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <p>Count: {counter}</p>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <p>
        {counter !== 0 && Math.abs(counter)} {message} {newDate.toDateString()}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
