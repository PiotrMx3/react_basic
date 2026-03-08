import {useState} from "react";
import "./App.css";
import SquareRow from "./components/SquareRow/SquareRow";
import SelectionBox from "./components/SelectionBox/SelectionBox";
import {SettingsContext} from "./context";

function App() {
  const [color, setColor] = useState<string>("red");

  const handleChangeColor = (color: string) => {
    setColor(color);
  };

  return (
    <>
      <SettingsContext.Provider
        value={{color: color, onSetColor: handleChangeColor}}
      >
        <SelectionBox />
        <SquareRow />
      </SettingsContext.Provider>
    </>
  );
}

export default App;
