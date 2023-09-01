import { View, StyleSheet, Image, Text } from "react-native";
import users from "../../../mocks/users";
import { useSelector } from "react-redux";

export default function UserData() {
  const loggedUser = useSelector((state) => state.loggedUser[0])
  console.log(loggedUser)
  return (
    <View style={styles.container}>
      <View style={styles.userData}>
        <Image source={{ uri: loggedUser?.imagen }} style={styles.userImage} />
        <Text style={styles.userName}>{loggedUser?.nombre}</Text>
      </View>
      <View>
        <Text style={styles.userPoints}>{loggedUser?.puntos} puntos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  userData: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: "100%",
    marginBottom: 10,
  },
  userName: {
    fontSize: 30,
    color: "black",
    fontWeight: "600"
  },
  userPoints: {
    color: "#371B1B",
    fontSize: 15
  }
});
