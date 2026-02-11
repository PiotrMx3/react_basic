import {useState} from "react";

const InputFields = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
    </>
  );
};

export default InputFields;
