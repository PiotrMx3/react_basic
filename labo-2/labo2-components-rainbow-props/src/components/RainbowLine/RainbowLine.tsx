interface RainbowLineProps {
  amount: number;
  direction: string;
}

const RainbowLine = ({amount, direction}: RainbowLineProps) => {
  const amountCheck = amount > 100 ? 100 : amount;

  const colors = Array.from(
    {length: amountCheck},
    (_, i) => `hsl(${(i * 360) / 100}, 100%, 50%)`,
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: direction === "horizontal" ? "column" : "row",
        }}
      >
        {colors.map((e, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: direction === "horizontal" ? "4px" : "100px",
              backgroundColor: e,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default RainbowLine;
