import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import TournamentsList from "./components/TournamentsList";
import { useSelector } from "react-redux";

export default function TournamentScreen() {
    const tournamentDetail = useSelector((state) => state.tournamentDetail)
    console.log(tournamentDetail)
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.goBack();
  };


  return (
    <>
      <View style={styles.container}>
        <View className="py-5">
          <StatusBar />
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBackToHome}>
              <ChevronLeftIcon size={30} color="black" />
            </TouchableOpacity>
            <Text className="text-3xl">Torneo</Text>
            <ChevronLeftIcon size={30} color="transparent" />
          </View>
        </View>
        {/* <TournamentsList /> */}
      </View>
    </>
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
});
