import {useEffect, useState} from "react";

const LifeGameBoard = () => {
  const [board, setboard] = useState<number[][]>([]);
  const [rows, setRows] = useState(50);
  const [columns, setColumns] = useState(50);
  const [running, setRunning] = useState(false);

  const CONDITIONS = [
    [-1, -1],
    [-1, 0],
    [-1, +1],
    [0, -1],
    [0, +1],
    [+1, -1],
    [+1, 0],
    [+1, +1],
  ];

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

  const goOneStep = () => {
    setboard((prev) => {
      const modified = prev.map((row) => [...row]);

      for (let row = 0; row < modified.length; row++) {
        for (let column = 0; column < modified[row].length; column++) {
          let neighbour = 0;

          for (let c = 0; c < CONDITIONS.length; c++) {
            if (
              prev[row + CONDITIONS[c][0]]?.[column + CONDITIONS[c][1]] === 1
            ) {
              neighbour++;
            }
          }

          if (prev[row][column] === 0 && neighbour === 3) {
            modified[row][column] = 1;
            continue;
          }

          if (prev[row][column] === 1 && (neighbour === 2 || neighbour === 3)) {
            modified[row][column] = 1;
          } else {
            modified[row][column] = 0;
          }
        }
      }

      return modified;
    });
  };

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      goOneStep();
    }, 200);

    return () => {
      clearInterval(id);
    };
  }, [running]);

  useEffect(() => {
    initializeGrid(rows, columns);
  }, []);

  return (
    <>
      <h1>LifeGameBoard</h1>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <input
          onChange={(e) => setRows(Number(e.target.value))}
          style={{height: "20px"}}
          type="number"
          id="rows"
          min={1}
          defaultValue={rows}
        />
        <input
          onChange={(e) => setColumns(Number(e.target.value))}
          style={{height: "20px"}}
          type="number"
          id="columns"
          min={1}
          defaultValue={columns}
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
                    backgroundColor: row[j] === 1 ? "red" : "",
                    border: "1px solid black",
                  }}
                ></div>
              ))}
            </div>
          );
        })}
      </div>
      <button onClick={() => goOneStep()} type="button">
        Step
      </button>
      <button onClick={() => setRunning((prev) => !prev)} type="button">
        {running ? "Stop" : "Start"}
      </button>
    </>
  );
};

export default LifeGameBoard;
