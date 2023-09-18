import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CurrencyDollarIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../../../redux/Actions";

export default function UserCard({
  userPosition,
  userPoints,
  userName,
  userImage,
  userId
}) {
  const dispatch = useDispatch();

  const handleUserCardClick = () => {
    dispatch(getUserDetail(userId));
  };
  return (
    <TouchableOpacity onPress={handleUserCardClick} style={styles.container}>
      <View style={styles.userPosition}>
        <Text className="text-2xl">{userPosition}</Text>
      </View>
      <View style={styles.userInfo}>
        <Image source={{ uri: userImage }} style={styles.userImage} />
        <Text style={styles.userName} className="text-lg">
          {userName?.split(" ")[0]}
        </Text>
      </View>
      <View style={styles.userPointsContainer}>
        <CurrencyDollarIcon color="orange" />
        <Text style={styles.userPoints} className="text-xs">
          {userPoints} puntos
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F8FA",
    paddingHorizontal: 5,
    paddingVertical: 25,
    borderRadius: 20,
  },
  userPosition: {
    color: "#766362",
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  userName: {
    color: "#543B3B",
  },
  userInfo: {
    width: "55%",
    maxWidth: "55%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userPointsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    width: "25%",
  },
  userPoints: {
    color: "#969696",
  },
});
