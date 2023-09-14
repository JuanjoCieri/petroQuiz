import { FlatList, StyleSheet, Text, View } from "react-native";
import tournaments from "../../../mocks/tournaments.js";
import TournamentsCard from "./TournamentsCard.js";
export default function TournamentsList() {
  return (
    <FlatList
      style={styles.container}
      data={tournaments}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: tournament, index }) => (
        <TournamentsCard
          tournamentName={tournament.nombre}
          tournamentOwner={tournament.creador}
          tournamentUsers={tournament.usuarios}
          tournamentCreation={tournament.fechaCreacion}
          tournamentInit={tournament.fechaInicio}
          tournamentFinish={tournament.fechaFinalizacion}
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
