import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTournamentDetail } from "../redux/Actions";

const useUserInTournament = (tournamentId) => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const tournamentDetail = useSelector((state) => state.tournamentDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    const isUserInTournament = tournamentDetail?.usuarios?.some(
      (user) => user.usuarioId === loggedUser.id
    );

    if (!isUserInTournament) {
      dispatch(getTournamentDetail(tournamentId));
    }
  }, [loggedUser, tournamentDetail, dispatch, tournamentId]);

  return tournamentDetail?.usuarios?.some(
    (user) => user.usuarioId === loggedUser.id
  );
};

export default useUserInTournament;
