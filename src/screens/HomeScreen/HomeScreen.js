import { ScrollView, StyleSheet } from "react-native";
import Title from "./components/Title";
import NewGame from "./components/NewGame";
import Categories from "./components/Categories";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Title />
      <NewGame />
      <Categories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
