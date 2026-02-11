import "./App.css";
import ColorSquare from "./ColorSquare/ColorSquare";

function App() {
  const COLORS = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#E74C3C",
    "#3498DB",
    "#2ECC71",
    "#F39C12",
    "#34495E",
  ];
  return (
    <>
      <div style={{display: "flex"}}>
        {COLORS.map((e) => (
          <ColorSquare color={e} size={50} />
        ))}
      </div>
    </>
  );
}

export default App;
