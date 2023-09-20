import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTournamentDetail } from "../redux/Actions";

const useUserInTournament = (tournamentId) => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const tournamentDetail = useSelector((state) => state.tournamentDetail);
  const dispatch = useDispatch();
  const [hasFetched, setHasFetched] = useState(false); // Bandera para controlar si se ha hecho la solicitud

  useEffect(() => {
    // Verificar si el usuario está en el torneo y si no se ha hecho la solicitud
    const isUserInTournament = tournamentDetail?.usuarios?.some(
      (user) => user.usuarioId === loggedUser.id
    );

    if (!isUserInTournament && !hasFetched) {
      dispatch(getTournamentDetail(tournamentId));
      setHasFetched(true); // Marcar que se ha realizado la solicitud
    }
  }, [loggedUser, tournamentDetail, dispatch, tournamentId, hasFetched]);

  return tournamentDetail?.usuarios?.some(
    (user) => user.usuarioId === loggedUser.id
  );
};

export default useUserInTournament;
