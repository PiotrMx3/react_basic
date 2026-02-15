import {useState} from "react";
import "./App.css";
import MultiplicationTable from "./components/MultiplicationTable/MultiplicationTable";

function App() {
  const [rows, setRows] = useState(1);
  return (
    <>
      <input
        min={1}
        value={rows}
        onChange={(e) => setRows(Number(e.target.value))}
        type="number"
      />
      <MultiplicationTable max={rows} />
    </>
  );
}

export default App;
