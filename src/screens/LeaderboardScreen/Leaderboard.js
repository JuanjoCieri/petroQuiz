import { Text, View, StyleSheet } from "react-native";
import RankingList from "./components/RankingList";

export default function Leaderboard () {
    return (
        <View style={styles.container}>
            <Text>Hola</Text>
            <RankingList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F9CA86",
      width: "100%",
      height: "100%"
    },
  });
  