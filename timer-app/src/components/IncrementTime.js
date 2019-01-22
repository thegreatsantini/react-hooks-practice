import React, { useState, useEffect } from "react";
import { millisecondsToHuman, toMS } from "../utils";
import "./growAnimation.css";



export default function IncrementTimer(props) {
  const { startingTime } = props;
  const [counter, setCounter] = useState(toMS(startingTime));
  if (counter === 1 ) {console.log(props)}
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (Math.round(counter) > 1000) {
    return <div className="element">{millisecondsToHuman(counter)}</div>;
  } else {
    return <div>{millisecondsToHuman(counter)}</div>;
  }
}
