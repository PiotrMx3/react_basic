interface MultiplicationRowProps {
  factor: number;
  max: number;
}

const MultiplicationRow = ({max, factor}: MultiplicationRowProps) => {
  const columns = Array.from({length: max}, (_, i) => i + 1);

  return (
    <>
      <tr>
        <th>{factor}</th>
        {columns.map((e, i) => (
          <td key={e}>{e * factor}</td>
        ))}
      </tr>
    </>
  );
};

export default MultiplicationRow;
