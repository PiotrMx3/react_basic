import {useState} from "react";

const ButtonList = () => {
  const [counters, setCounters] = useState<number[]>([]);

  const handleAddition = (index: number) => {
    const modifed = [...counters];
    modifed[index]++;
    setCounters(modifed);
  };

  const handleSubtraction = (index: number) => {
    const modifed = [...counters];
    modifed[index]--;
    setCounters(modifed);
  };

  return (
    <>
      {counters.map((e, i) => {
        return (
          <div
            key={i}
            style={{display: "flex", gap: "2rem", marginBottom: "1rem"}}
          >
            <button onClick={() => handleSubtraction(i)} type="button">
              Omlaag
            </button>
            <p>Count: {e}</p>
            <button onClick={() => handleAddition(i)} type="button">
              Omhoog
            </button>
          </div>
        );
      })}

      <p>Som van telers: {counters.reduce((e, a) => e + a, 0)}</p>
      <button onClick={() => setCounters((prev) => [...prev, 0])} type="button">
        Voeg teller toe
      </button>
    </>
  );
};

export default ButtonList;
