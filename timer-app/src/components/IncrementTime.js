import { useState, useEffect } from "react";
import { millisecondsToHuman } from "../utils";

const toMS = time => {
  if (time === 0 ) return 0;
  const splitTime = time.split(":");
  const hours = parseInt(splitTime[0]) * 3600 * 1000;
  const minutes = parseInt(splitTime[1]) * 1000;
  return hours + minutes + parseInt(splitTime[2]);
};

export default function IncrementTimer(props) {
  const { startingTime } = props;
  const [counter, setCounter] = useState(toMS(startingTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return millisecondsToHuman(counter);
}
