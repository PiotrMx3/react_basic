import "./App.css";
import CurrentTime from "./components/CurrentTime/CurrentTime";
import RandomValue from "./components/RandomValue/RandomValue";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <Timer />
      <CurrentTime />
      <RandomValue min={1} max={100} />
      <RandomValue min={100} max={200} />
    </>
  );
}

export default App;
