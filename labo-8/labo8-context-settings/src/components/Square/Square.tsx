import {useContext} from "react";
import {SettingsContext} from "../../context";

const Square = () => {
  const {color, onSetColor} = useContext(SettingsContext);

  const handleColoChange = () => {
    const colorChange =
      color === "red" ? "blue" : color === "blue" ? "green" : "red";

    onSetColor(colorChange);
  };

  return (
    <div
      onClick={handleColoChange}
      style={{
        height: "100px",
        width: "100px",
        margin: "10px",
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Square;
