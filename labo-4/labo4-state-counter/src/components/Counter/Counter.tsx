import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{display: "flex", justifyContent: "space-evenly", gap: "1rem"}}
      >
        <button onClick={() => setCount((prev) => prev + 1)}>Omhoog</button>
        <p style={count == 0 ? {} : {color: count < 0 ? "red" : "green"}}>
          Count : {count}
        </p>
        <button onClick={() => setCount((prev) => prev - 1)}>Omlaag</button>
      </div>
    </>
  );
};

export default Counter;
