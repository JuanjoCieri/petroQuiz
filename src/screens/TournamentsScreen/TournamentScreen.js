import { Text, View, StyleSheet } from "react-native";

export default function TournamentScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>En desarrollo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
  },
});
