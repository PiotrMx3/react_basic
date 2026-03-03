import {useState} from "react";
import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const [limit, setLimit] = useState(151);
  const [helpLimit, setHelpLimit] = useState(limit);

  return (
    <>
      <Pokedex limit={limit} />
      <input
        onChange={(e) => setHelpLimit(Number(e.target.value))}
        type="number"
        name="limit"
        id="limit"
        min="1"
      />

      <button onClick={() => setLimit(helpLimit)} type="button">
        Set Limit
      </button>
    </>
  );
}

export default App;
