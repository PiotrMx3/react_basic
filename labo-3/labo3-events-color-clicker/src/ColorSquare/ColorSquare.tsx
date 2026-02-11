const ColorSquare = ({color, size}: {color: string; size: number}) => {
  const handleClick = () => {
    alert(`ColorSquare clicked with color: ${color}`);
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{width: size, height: size, backgroundColor: color}}
      ></div>
    </>
  );
};

export default ColorSquare;
