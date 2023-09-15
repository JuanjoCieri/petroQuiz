import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import UserDetailModal from "../LeaderboardScreen/components/UserDetailModal";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import NewTournamentButton from "./components/NewTournamentButton";
import TournamentsList from "./components/TournamentsList";
import NewTournamentModal from "./components/NewTournamentModal";
import { useState } from "react";

export default function TournamentScreen() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const handleBackToHome = () => {
    navigation.goBack();
  };

  function openModal () {
    setOpen(!open);
  };

  return (
    <>
      <View style={styles.container}>
        {open ? <NewTournamentModal openModal={openModal}/> : false}
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
        <NewTournamentButton openModal={openModal} />
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
