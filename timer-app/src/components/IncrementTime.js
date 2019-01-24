import React, { useState, useEffect } from "react";
import { millisecondsToHuman, toMS } from "../utils";
import "./growAnimation.css";

export default function IncrementTimer(props) {
  const { startingTime, stop } = props;
  const [counter, setCounter] = useState(toMS(startingTime));
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return counter >= stop ? (
    <div className="element">{millisecondsToHuman(counter)}</div>
  ) : (
    <div>{millisecondsToHuman(counter)}</div>
  );
}
