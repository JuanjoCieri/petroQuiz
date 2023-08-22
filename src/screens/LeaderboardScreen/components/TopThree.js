import { Text, View, StyleSheet, Image } from "react-native";
import users from "../../../mocks/users";

export default function TopThree() {
  const firstUsers = users.slice(0, 3);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{ uri: firstUsers[0].userImage }}
          style={styles.userImage}
        />
        {/* <View style={styles.topImage}></View> */}
        <View style={styles.topTwo}>
          <Text style={styles.topNumberText} className="text-xl">
            2
          </Text>
        </View>
      </View>
      <View style={styles.topContainer}>
        <Image
          source={{ uri: firstUsers[1].userImage }}
          style={styles.userImage}
        />
        {/* <View style={styles.topImage}></View> */}
        <View style={styles.topOne}>
          <Text style={styles.topNumberText} className="text-xl">
            1
          </Text>
        </View>
      </View>
      <View style={styles.topContainer}>
        <Image
          source={{ uri: firstUsers[2].userImage }}
          style={styles.userImage}
        />
        {/* <View style={styles.topImage}></View> */}
        <View style={styles.topThree}>
          <Text style={styles.topNumberText} className="text-xl">
            3
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingHorizontal: 50,
  },
  topContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: "100%",
    marginBottom: 10,
  },
  topImage: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: "100%",
    marginBottom: 10,
  },
  topOne: {
    height: "85%",
    width: 60,
    backgroundColor: "#606F54",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },
  topTwo: {
    height: "80%",
    width: 60,
    backgroundColor: "#A8593E",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },
  topThree: {
    height: "75%",
    width: 60,
    backgroundColor: "#D88201",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },
  topNumberText: {
    color: "white",
  },
});
