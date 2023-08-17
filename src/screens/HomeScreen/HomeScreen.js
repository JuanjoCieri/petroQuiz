import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Title from "./components/Title";
import Idk from "./components/Idk";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title />
      <Idk />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
