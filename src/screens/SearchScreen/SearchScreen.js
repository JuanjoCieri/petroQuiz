import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen() {
    const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToHome}>
          <ChevronLeftIcon size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl">Buscador</Text>
        <ChevronLeftIcon size={30} color="transparent" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "grey",
    borderWidth: 1,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 40,
    justifyContent: "center",
    paddingLeft: 15,
  },
});
