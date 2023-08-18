import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "./components/Title";
import Idk from "./components/Idk";
import Categories from "./components/Categories";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Title />
      <Idk />
      <Categories />
    </ScrollView>

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
