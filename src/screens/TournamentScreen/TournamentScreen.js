import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import RankingList from "./components/RankingList";
import PlayButton from "./components/PlayButton";
import TimeCard from "./components/TimeCard";
import JoinButton from "./components/JoinButton";
import useUserInTournament from "../../hooks/useUserInTournament";

export default function TournamentScreen() {
  const tournamentDetail = useSelector((state) => state.tournamentDetail);
  const navigation = useNavigation();
  const isUserInTournament = useUserInTournament(tournamentDetail.id);

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
            <View style={styles.nameCard}>
              <Text className="text-2xl font-bold text-white">
                {tournamentDetail?.nombre}
              </Text>
            </View>
            <ChevronLeftIcon size={30} color="transparent" />
          </View>
        </View>
        <View style={styles.info}>
          <TimeCard tournamentInit={tournamentDetail.fechaInicio} tournamentCreation={tournamentDetail.fechaCreacion} tournamentFinish={tournamentDetail.fechaFinalizacion}/>
          {isUserInTournament ? <PlayButton /> : <JoinButton />}
        </View>
        <RankingList tournamentUsers={tournamentDetail?.usuarios} />
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
  nameCard: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: "#897B68",
    borderRadius: 20,
  },
  info: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "20%",
  },
});
