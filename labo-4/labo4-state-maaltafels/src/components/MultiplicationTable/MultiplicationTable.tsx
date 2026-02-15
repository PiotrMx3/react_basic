import Header from "../Header/Header";
import MultiplicationRow from "../MultiplicationRow/MultiplicationRow";

interface MultiplicationTableProps {
  max: number;
}

const MultiplicationTable = ({max}: MultiplicationTableProps) => {
  const rows = Array.from({length: max}, (_, i) => i + 1);
  return (
    <>
      <table>
        <thead>
          <Header max={max} />
        </thead>
        <tbody>
          {rows.map((el, i) => (
            <MultiplicationRow key={i} max={max} factor={el} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MultiplicationTable;
