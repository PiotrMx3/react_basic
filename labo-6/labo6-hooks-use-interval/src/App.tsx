import {useState} from "react";
import "./App.css";
import useInterval from "./ulities/useInterval";

function App() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [running, setRunning] = useState(true);

  useInterval(() => setCount((prev) => prev + 1), delay, running);

  return (
    <>
      <h1>Count: {count}</h1>
      <input
        onChange={(e) => setDelay(Number(e.target.value))}
        type="number"
        name="number"
        id="input-num"
        min="1"
        value={delay}
      />
      <button onClick={() => setRunning(false)} type="button">
        Pause
      </button>
      <button onClick={() => setRunning(true)} type="button">
        Resume
      </button>
    </>
  );
}

export default App;
