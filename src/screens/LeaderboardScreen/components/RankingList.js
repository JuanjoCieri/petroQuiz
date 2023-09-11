import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLeaderboardRank } from "../../../redux/Actions";

export default function RankingList() {
  const rankingList = useSelector((state) => state.rankingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaderboardRank());
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={rankingList}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: user, index }) => (
        <UserCard
          userPosition={index + 1} 
          userName={user.nombre}
          userPoints={user.puntos}
          userImage={user.imagen}
        />
      )}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});
