import { View, StyleSheet, Image, Text } from "react-native";
import users from "../../../mocks/users";

export default function UserData() {
  return (
    <View style={styles.container}>
      <View style={styles.userData}>
        <Image source={{ uri: users[1].userImage }} style={styles.userImage} />
        <Text style={styles.userName}>{users[0].userName}</Text>
      </View>
      <View>
        <Text>{users[0].userPoints} puntos</Text>
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
    fontSize: 25
  }
});
