import RainbowLine from "../RainbowLine/RainbowLine";

interface RainbowProps {
  amount: number;
  direction: string;
}

const Rainbow = ({amount, direction}: RainbowProps) => {
  return (
    <>
      <RainbowLine amount={amount} direction={direction} />
    </>
  );
};

export default Rainbow;
