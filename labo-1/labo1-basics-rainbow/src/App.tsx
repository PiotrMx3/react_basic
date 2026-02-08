import "./App.css";

function App() {
  const colors = Array.from(
    {length: 100},
    (_, i) => `hsl(${(i * 360) / 100}, 100%, 50%)`,
  );

  return (
    <>
      {colors.map((e, i) => (
        <div
          key={i}
          style={{width: "100%", height: "5px", backgroundColor: e}}
        ></div>
      ))}
    </>
  );
}

export default App;
