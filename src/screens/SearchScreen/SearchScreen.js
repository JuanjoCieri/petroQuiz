import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import InputBar from "./components/InputBar";
import Results from "./components/Results";

export default function SearchScreen() {
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <View className="py-5">
        <StatusBar />
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackToHome}>
            <ChevronLeftIcon size={30} color="black" />
          </TouchableOpacity>
          <Text className="text-3xl">Buscador</Text>
          <ChevronLeftIcon size={30} color="transparent" />
        </View>
      </View>
      <InputBar />
      <Results />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    padding: 30,
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
