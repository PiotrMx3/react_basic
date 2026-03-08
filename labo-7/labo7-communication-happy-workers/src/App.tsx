import {useState} from "react";
import "./App.css";
import Square from "./components/Square/Square";

function App() {
  const [work, setWork] = useState(0);

  const handleWork = (p: number) => {
    setWork((prev) => Math.min(prev + p, 100));
  };

  console.log(work);
  return (
    <>
      <progress value={work} max={"100"}></progress>
      <div style={{display: "flex", gap: "1rem"}}>
        <Square color="green" onWork={handleWork} work={work} />
        <Square color="violet" onWork={handleWork} work={work} />
        <Square color="yellow" onWork={handleWork} work={work} />
      </div>
    </>
  );
}

export default App;
