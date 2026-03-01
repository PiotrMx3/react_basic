import {useEffect, useState} from "react";

const RandomValue = ({min, max}: {min: number; max: number}) => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const random = Math.floor(Math.random() * (max - min) + min);

      setRandom(random);
    }, 1000);
    return () => clearInterval(id);
  }, [min, max]);

  return (
    <h1>
      Random value between {min} and {max} : {random}
    </h1>
  );
};

export default RandomValue;
