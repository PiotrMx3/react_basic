import {useState} from "react";

const LifeGameBoard = () => {
  const [board, setboard] = useState<number[][]>([]);
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(1);

  const initializeGrid = (rows: number, columns: number) => {
    setboard([]);
    const array = Array.from({length: rows}, () =>
      Array.from({length: columns}, () => (Math.random() < 0.5 ? 1 : 0)),
    );

    setboard(array);
  };

  const flipElement = (row: number, cell: number) => {
    const modified = board.map((row) => [...row]);
    modified[row][cell] = modified[row][cell] === 1 ? 0 : 1;
    setboard(modified);
  };

  return (
    <>
      <h1>LifeGameBoard</h1>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "Repeat(3, 1fr)",
        }}
      >
        <input
          onChange={(e) => setRows(Number(e.target.value))}
          style={{height: "20px"}}
          type="number"
          id="rows"
          min={1}
          defaultValue={1}
        />
        <input
          onChange={(e) => setColumns(Number(e.target.value))}
          style={{height: "20px"}}
          type="number"
          id="columns"
          min={1}
          defaultValue={1}
        />
        <button onClick={() => initializeGrid(rows, columns)} type="button">
          Set
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {board.map((row, i) => {
          return (
            <div
              key={`row-${i}`}
              id={`row-${i}`}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {row.map((_, j) => (
                <div
                  onClick={() => flipElement(i, j)}
                  key={`cell-${i}-${j}`}
                  id={`cell-${i}-${j}`}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: row[j] === 1 ? "black" : "",
                  }}
                ></div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LifeGameBoard;
