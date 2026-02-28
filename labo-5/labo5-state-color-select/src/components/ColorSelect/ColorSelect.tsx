import {useState} from "react";

const COLORS = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "black",
  "white",
];

const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Rozpakowujemy wybrane opcje
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setSelectedColors([...selectedValues]);
  };

  const handleDivChangeColor = (index: number) => {
    const newColor: string =
      prompt("Geef een nieuwe kleur in", colors[index]) ?? "";

    if (newColor === "") return alert("Kleur mag niet leeg zijn");

    if (COLORS.includes(newColor)) {
      const modifedArray = [...colors];
      modifedArray[index] = newColor;
      setColors(modifedArray);
      return;
    }

    return alert("Deze kleur kan ik niet");
  };

  return (
    <>
      <div style={{border: "1px black solid"}}>
        <select onChange={handleChange} multiple id="select">
          {COLORS.map((colorName) => (
            <option key={colorName} value={colorName}>
              {colorName}
            </option>
          ))}
        </select>
        <br />
        <button onClick={() => setColors([...selectedColors])} type="button">
          Show Colors
        </button>

        {colors.length !== 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "300px",
            }}
          >
            {colors.map((e, i) => (
              <div
                key={e + i}
                onClick={() => handleDivChangeColor(i)}
                style={{
                  flex: "1 1 0%",
                  height: "200px",
                  backgroundColor: e,
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ColorSelect;
