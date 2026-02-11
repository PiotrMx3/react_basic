interface CheckBoxprops {
  size: number;
}

const CheckBox = ({size}: CheckBoxprops) => {
  const array: boolean[][] = Array.from({length: size}, () =>
    Array(size).fill(false),
  );

  const handleClick = (i: number, j: number, check: boolean) => {
    alert(`${j}:${i} ${check ? "checked" : "unchecked"}`);
  };

  return (
    <>
      <div
        style={{display: "grid", gridTemplateColumns: `repeat(${size}, 1fr)`}}
      >
        {array.map((row, j) =>
          row.map((_, i) => {
            return (
              <input
                onChange={(e) => handleClick(i, j, Boolean(e.target.checked))}
                key={i}
                type="checkbox"
                name="box"
              />
            );
          }),
        )}
      </div>
    </>
  );
};

export default CheckBox;
