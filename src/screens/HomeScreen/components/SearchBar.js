import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
export default function SearchBar() {
  const navigation = useNavigation()
  const handleGoSearch = () => {
    navigation.navigate("SearchScreen")
  };
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handleGoSearch}>
      <View style={styles.container}>
        <View style={styles.both}>
          <MagnifyingGlassIcon width={30} stroke={"gray"} />
          <Text style={{ fontSize: 17, color: "gray" }}>Buscar jugadores...</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEE',
    borderWidth: 0.5,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 40,
    justifyContent: "center",
    paddingLeft: 15,
  },
  both: {
    flexDirection: "row",
    gap: 5
  }
});
