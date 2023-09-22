import { FlatList, StyleSheet, Text, View } from "react-native";
import TournamentsCard from "./TournamentsCard.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTournaments } from "../../../redux/Actions/index.js";
export default function TournamentsList() {
  const tournaments = useSelector((state) => state.allTournaments);
  const dispatch = useDispatch();
  console.log(tournaments, "acá");

  useEffect(() => {
    dispatch(getAllTournaments());
  }, [dispatch]);

  return (
    <FlatList
      style={styles.container}
      data={tournaments.tournaments}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: tournament, index }) => (
        <TournamentsCard
          tournamentName={tournament.nombre}
          tournamentOwner={tournament.creador}
          tournamentUsers={tournament.usuarios}
          tournamentInit={tournament.fechaCreacion}
          tournamentStart={tournament.fechaInicio}
          tournamentFinish={tournament.fechaFinalizacion}
          tournamentId={tournament.id}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});
