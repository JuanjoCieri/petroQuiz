import { useState, useEffect } from "react";

export function useGameTimer() {
  const initialTime = 30; // Establece el tiempo inicial en 30 segundos
  const [counter, setCounter] = useState(initialTime);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(intervalId);
    }
  }, [counter]);

  useEffect(() => {
    if (counter > 0 && !intervalId) {
      const id = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      setIntervalId(id);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, []);

  const resetTimer = () => {
    setCounter(initialTime); // Reinicia el contador a 30 segundos
  };

  return {
    counter,
    resetTimer,
  };
}
