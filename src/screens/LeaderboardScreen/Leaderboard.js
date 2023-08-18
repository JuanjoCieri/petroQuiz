import { Text, View, StyleSheet } from "react-native";
import RankingList from "./components/RankingList";
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import TopThree from "./components/TopThree";

export default function Leaderboard() {
  return (
    <View style={styles.container}>
      <View className="py-5">
        <StatusBar />
        <View style={styles.header}>
          <ChevronLeftIcon size={30} color="black" />
          <Text className="text-3xl">Ranking</Text>
          <ChevronLeftIcon size={30} color="transparent" />
        </View>
      </View>
      <TopThree />
      <RankingList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "100%",
  },
});
