import styles from "./SlotMachine.module.css";

import {
  cherry,
  lemon,
  plum,
  seven,
  watermelon,
} from "../../assets/images/images";
import {useState} from "react";

interface SlotMachineProps {
  slots: number;
}

interface SlotProps {
  value: number;
}

interface Slot {
  value: number;
  id: string;
}

const imagesArray = [cherry, lemon, plum, seven, watermelon];

const array = (slots: number): Slot[] => {
  return Array.from({length: slots}, () => {
    return {
      value: Math.floor(Math.random() * 5),
      id: crypto.randomUUID(),
    };
  });
};

const Slot = ({value}: SlotProps) => {
  return (
    <img
      className={`${styles.slotsContainerImage}`}
      src={imagesArray[value]}
      alt={`Slot Item`}
    />
  );
};

const SlotMachine = ({slots}: SlotMachineProps) => {
  const [slotsArray, setSlotsArray] = useState<Slot[]>(array(slots));
  const [money, setMoney] = useState<number>(100);

  const isWinning = slotsArray.every((el) => el.value === slotsArray[0].value);

  const handlePullLever = () => {
    const localArray = [...array(slots)];
    setSlotsArray(localArray);

    const isWinningLocal = localArray.every(
      (el) => el.value === localArray[0].value,
    );

    isWinningLocal
      ? setMoney((prev) => prev + 20)
      : setMoney((prev) => prev - 1);
  };

  return (
    <>
      <p>Saldo: €{money}</p>
      <div className={`${styles.slotsContainer}`}>
        <>
          <button onClick={handlePullLever} disabled={money == 0} type="button">
            Pull Lever
          </button>
        </>
        {slotsArray.map((slot) => (
          <Slot key={slot.id} value={slot.value} />
        ))}
      </div>
      {isWinning ? <h2>Je hebt gewonnen</h2> : <h2>Je hebt verloren</h2>}
    </>
  );
};

export default SlotMachine;
