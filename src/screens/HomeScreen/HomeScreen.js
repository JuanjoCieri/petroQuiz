import {
  ScrollView,
  StyleSheet,
} from "react-native";
import Title from "./components/Title";
import NewGame from "./components/NewGame";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Title />
      <SearchBar />
      <NewGame />
      <Categories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white"
  },
});
