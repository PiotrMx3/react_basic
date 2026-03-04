import {useContext} from "react";
import {SettingsContext} from "../../App";

const SelectionBox = () => {
  const {color, onSetColor} = useContext(SettingsContext);
  return (
    <>
      <select
        onChange={(e) => onSetColor(e.target.value)}
        name="select-color"
        id="select-color"
        value={color}
      >
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
    </>
  );
};

export default SelectionBox;
