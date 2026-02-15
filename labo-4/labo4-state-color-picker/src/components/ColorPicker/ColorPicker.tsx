import {useState} from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#00000");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          alignItems: "center",
        }}
      >
        <input onChange={(e) => setColor(e.target.value)} type="color" />
        <select onChange={(e) => setColor(e.target.value)} name="select-color">
          <option value="#000000">#000000</option>
          <option value="#FF0000">#FF0000</option>
          <option value="#00FF00">#00FF00</option>
          <option value="#0000FF">#0000FF</option>
        </select>
        <div
          style={{width: "3rem", height: "3rem", backgroundColor: color}}
        ></div>
      </div>
    </>
  );
};

export default ColorPicker;
