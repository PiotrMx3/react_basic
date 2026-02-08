import "./App.css";

function App() {
  const alphabetArray = Array.from({length: 26}, (_, i) => (
    <img
      src={`https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${String.fromCharCode(i + 65)}.png`}
      alt={`leter-${String.fromCharCode(i + 65)}`}
    />
  ));

  return (
    <>
      {alphabetArray.map((e, i) => (
        <button key={i}>{e}</button>
      ))}
    </>
  );
}

export default App;
