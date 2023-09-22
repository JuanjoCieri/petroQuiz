import { useState, useEffect } from "react";

const useCalculateTimeRemaining = (tournamentStart, tournamentFinish) => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const now = new Date();

  const startDateTime = new Date(tournamentStart);
  const finishDateTime = new Date(tournamentFinish);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      if (now < startDateTime) {
        const timeDifference = startDateTime - now;
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeRemaining(`Empieza en ${minutes}m`);
      } else if (now < finishDateTime) {
        const timeDifference = finishDateTime - now;
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeRemaining(`Termina en ${minutes}m`);
      } else {
        setTimeRemaining("El torneo ha finalizado");
      }
    };

    calculateTimeRemaining();

    const intervalId = setInterval(calculateTimeRemaining, 60000);

    return () => clearInterval(intervalId);
  }, [startDateTime, finishDateTime]);

  return timeRemaining;
};

export default useCalculateTimeRemaining;
