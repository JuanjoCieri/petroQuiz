import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ClockIcon, UserGroupIcon } from "react-native-heroicons/solid";

export default function TournamentsCard({
  tournamentName,
  tournamentOwner,
  tournamentUsers,
  tournamentCreation,
  tournamentInit,
  tournamentFinish,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.tournamentName}>{tournamentName}</Text>
        <Text style={styles.tournamentOwner}>Creado por {tournamentOwner}</Text>
      </View>
      <View style={styles.right}>
        <View style={{flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center"}}>
          <ClockIcon width={20} stroke={"black"} />
          <Text>Empieza en {tournamentInit}</Text>
        </View>
        <View style={{flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center"}}>
          <UserGroupIcon width={20} stroke={"black"} />
          <Text>{tournamentUsers.length}/50</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F8FA",
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  left: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRightColor: "black",
    borderRightWidth: 0.5,
    paddingLeft: 20,
  },
  right: {
    width: "50%",
    borderLeftColor: "black",
    borderLeftWidth: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,

  },
  tournamentName: {
    fontSize: 25,
    fontWeight: "600",
  },
  tournamentOwner: {
    color: "#696969",
  },
});
