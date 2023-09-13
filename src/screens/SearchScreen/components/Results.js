import { FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import ResultsCard from "./ResultsCard";

export default function Results() {
  const searchedUsers = useSelector((state) => state.searchedUsers.users);
  console.log(searchedUsers);
  return (
    <FlatList
      style={styles.container}
      data={searchedUsers}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: user, index }) => (
        <ResultsCard
          userName={user.nombre}
          userPoints={user.puntos}
          userImage={user.imagen}
          userId={user.id}
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
