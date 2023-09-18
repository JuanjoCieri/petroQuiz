import { useState, useEffect } from "react";

const useCalculateTimeRemaining = (tournamentInit) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const initTime = new Date(tournamentInit);
      const timeDifference = initTime - now;

      if (timeDifference <= 0) {
        setTimeRemaining("El torneo ha comenzado");
      } else {
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeRemaining(`Empieza en ${minutes}m`);
      }
    };

    calculateTimeRemaining();

    const intervalId = setInterval(calculateTimeRemaining, 60000);

    return () => clearInterval(intervalId);
  }, [tournamentInit]);

  return timeRemaining;
};

export default useCalculateTimeRemaining;
