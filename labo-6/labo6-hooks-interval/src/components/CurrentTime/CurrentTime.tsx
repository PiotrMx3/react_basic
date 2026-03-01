import {useEffect, useState} from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Current Time: {time}</h1>;
};

export default CurrentTime;
