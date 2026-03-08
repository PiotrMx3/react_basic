import {useEffect, useState} from "react";

interface SquareProp {
  color?: string;
  size?: string;
  onWork: (p: number) => void;
  work: number;
}

const Square = ({color = "red", size = "100px", onWork, work}: SquareProp) => {
  const [productivity, setProductivity] = useState(1);
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    if (productivity === 0 || work >= 100) return;

    setClicked((prev) => prev + 1);
    onWork(productivity);
  };

  useEffect(() => {
    if (clicked >= 10) {
      setProductivity(0);
      const id = setTimeout(() => {
        setProductivity(1);
        setClicked(0);
      }, 5000);

      return () => clearTimeout(id);
    }
  }, [clicked]);

  return (
    <div
      onClick={handleClick}
      style={{
        marginTop: "3rem",
        height: size,
        width: size,
        backgroundColor: color,
        fontSize: "4rem",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {productivity === 0 ? "😵" : work < 100 ? "😐" : "😃"}
    </div>
  );
};

export default Square;
