import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLeaderboardRank, getTournamentDetail } from "../../../redux/Actions";
import UserCard from "./UserCard";

export default function RankingList(tournamentUsers) {

  return (
    <FlatList
      style={styles.container}
      data={tournamentUsers.tournamentUsers}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: user, index }) => (
        <UserCard
          userPosition={index + 1} 
          userName={user.nombreUsuario}
          userPoints={user.puntos}
          userImage={user.imagenUsuario}
          userId={user.usuarioId}
        />
      )}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
});
