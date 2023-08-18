import { View, StyleSheet, Text } from "react-native";
import { CurrencyDollarIcon } from "react-native-heroicons/solid";

export default function UserCard({
  userPosition,
  userPoints,
  userName,
  userImage,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.userPosition}>
        <Text className="text-2xl">{userPosition}</Text>
      </View>
      <View>
        <Text style={styles.userName} className="text-lg">{userName}</Text>
      </View>
      <View style={styles.userPointsContainer}>
        <CurrencyDollarIcon color="orange"/>
        <Text style={styles.userPoints} className="text-xs">{userPoints} puntos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F8FA",
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 20
  },
  userPosition: {
    color: "#766362"
  },
  userName: {
    color: "#543B3B"
  },
  userPointsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2
  },
  userPoints: {
    color: "#969696"
  }
});
