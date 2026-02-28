import {useState} from "react";

const WINNING_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array.from({length: 9}, (_) => ""));
  const [player, setPlayer] = useState("X");
  const [endGame, setEndGame] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const handlePlayerMove = (index: number) => {
    const newBoard = [...board];

    if (newBoard[index] === "") {
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer((prev) => (prev === "X" ? "O" : "X"));

      for (let i = 0; i < WINNING_CONDITIONS.length; i++) {
        const el1 = newBoard[WINNING_CONDITIONS[i][0]];
        const el2 = newBoard[WINNING_CONDITIONS[i][1]];
        const el3 = newBoard[WINNING_CONDITIONS[i][2]];

        if (el1 === el2 && el2 === el3 && el1 !== "") {
          setEndGame(true);
          setPlayer(player);
          break;
        }
      }
    }

    if (!newBoard.includes("")) {
      setIsDraw(true);
    }
  };

  const handleRestart = () => {
    setEndGame(false);
    setIsDraw(false);
    setBoard(Array.from({length: 9}, (_) => ""));
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "Repeat(3, 1fr)",
          gridTemplateRows: "Repeat(3, 1fr)",
          height: "250px",
          width: "250px",
        }}
      >
        {board.map((e, i) => (
          <div
            onClick={!endGame ? () => handlePlayerMove(i) : undefined}
            style={{
              border: "1px solid black",
              fontSize: "30px",
              cursor: "pointer",
              textAlign: "center",
              padding: "1rem",
            }}
            key={i}
          >
            {e}
          </div>
        ))}
      </div>
      {endGame && <p>{player} Wins!</p>}
      {isDraw && !endGame && <p>It's a Draw!</p>}
      {(endGame || isDraw) && (
        <button onClick={handleRestart} type="button">
          New Game
        </button>
      )}
    </>
  );
};

export default TicTacToe;
