import {useState, type CSSProperties} from "react";
import "./App.css";

const ColorSquare = () => {
  const COLORS = ["red", "blue", "green"];

  const [colorIndex, setColorIndex] = useState<number>(0);
  const [name, setName] = useState<string>("Joske");
  const [inputName, setInputName] = useState<string>("Joske");
  const [emotion, setEmotion] = useState<string>(":)");

  const [square, setSquare] = useState<boolean>(true);

  const border: CSSProperties = square ? {} : {borderRadius: "50%"};

  const handleColorIndex = () => {
    setColorIndex((prev) => (prev == COLORS.length - 1 ? 0 : prev + 1));
  };

  const handleResetName = () => {
    setInputName("Joske");
    setName("Joske");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>
        <b>{name}</b>
      </p>
      <div
        className="square"
        style={{
          backgroundColor: COLORS[colorIndex],
          width: "50px",
          height: "50px",
          ...border,
        }}
        onClick={handleColorIndex}
      >
        <p>{emotion}</p>
      </div>
      <br />
      <div>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleResetName}>Reset Name</button>
        <button onClick={() => setName(inputName)}>Set</button>
      </div>
      <select value={emotion} onChange={(e) => setEmotion(e.target.value)}>
        <option value=":)">{`:)`}</option>
        <option value=":|">{`:|`}</option>
        <option value=":(">{`:(`}</option>
      </select>
      <div>
        <input
          type="checkbox"
          id="square"
          onChange={(e) => setSquare(e.target.checked)}
          checked={square}
        />
        <label htmlFor="square">Square</label>
      </div>
    </div>
  );
};
const App = () => {
  return <ColorSquare />;
};

export default App;
