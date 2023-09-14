import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import UserDetailModal from "../LeaderboardScreen/components/UserDetailModal";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import NewTournamentButton from "./components/NewTournamentButton";
import TournamentsList from "./components/TournamentsList";

export default function TournamentScreen() {
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
            <Text className="text-3xl">Torneos</Text>
            <ChevronLeftIcon size={30} color="transparent" />
          </View>
        </View>
        <NewTournamentButton />
        <TournamentsList />
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
