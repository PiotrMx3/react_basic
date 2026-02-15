import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App;
