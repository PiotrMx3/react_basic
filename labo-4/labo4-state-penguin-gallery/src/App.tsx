import "./App.css";
import PenguinCard from "./components/PenguinCard/PenguinCard";
import penguins from "./penguins.json";

export interface Penguin {
  id: number;
  nickname: string;
  description: string;
  species_id: number;
  island: string;
  gender: string;
  weight: number;
  height: number;
  year: number;
  image: string;
  assigned_to: string | null;
}
function App() {
  return (
    <>
      <h1>Female Penguins</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          gap: "1rem",
        }}
      >
        {penguins
          .filter(
            (penguinItem) => penguinItem.gender.toLowerCase() === "female",
          )
          .map((penguinItem) => (
            <PenguinCard key={penguinItem.id} penguin={penguinItem} />
          ))}
      </div>
    </>
  );
}

export default App;
