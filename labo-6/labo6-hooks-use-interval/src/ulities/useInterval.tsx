import {useEffect} from "react";

type TimeoutCallback = () => void;

const useInterval = (
  callback: TimeoutCallback,
  delay: number,
  running: boolean,
) => {
  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      callback();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay, running]);
};

export default useInterval;
