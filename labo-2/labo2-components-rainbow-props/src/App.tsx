import "./App.css";
import Rainbow from "./components/Rainbow/Rainbow";

function App() {
  return (
    <>
      <Rainbow amount={20} direction={"vertical"} />
      <br />
      <Rainbow amount={10} direction={"horizontal"} />
    </>
  );
}

export default App;
