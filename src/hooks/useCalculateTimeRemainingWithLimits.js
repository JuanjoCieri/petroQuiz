import { useState, useEffect } from "react";

const useCalculateTimeRemainingWithLimits = (tournamentInit, tournamentCreation, tournamentFinish) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const now = new Date();
    const initTime = new Date(tournamentInit);
    const creationTime = new Date(tournamentCreation);
    const finishTime = new Date(tournamentFinish);

    if (now < creationTime) {
      const creationDifference = creationTime - now;
      const creationMinutes = Math.floor(
        (creationDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setTimeRemaining(`Empieza en ${creationMinutes}m`);
    } else if (now >= creationTime && now < finishTime) {
      const difference = finishTime - now;
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setTimeRemaining(`Termina en ${minutes}m`);
    } else {
      setTimeRemaining("El torneo ha finalizado");
    }

    const intervalId = setInterval(() => {
      if (now < creationTime) {
        const creationDifference = creationTime - now;
        const creationMinutes = Math.floor(
          (creationDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeRemaining(`Empieza en ${creationMinutes}m`);
      } else if (now >= creationTime && now < finishTime) {
        const difference = finishTime - now;
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`Termina en ${minutes}m`);
      } else {
        setTimeRemaining("El torneo ha finalizado");
      }
    }, 60000);

    return () => clearInterval(intervalId);
  }, [tournamentInit, tournamentCreation, tournamentFinish]);

  return timeRemaining;
};

export default useCalculateTimeRemainingWithLimits;
