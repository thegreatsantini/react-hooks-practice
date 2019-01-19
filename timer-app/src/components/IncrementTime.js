import { useState, useEffect } from 'react';
import { millisecondsToHuman } from '../utils'

export default function IncrementTimer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return millisecondsToHuman(counter);
};