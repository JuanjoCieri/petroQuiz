import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import SettingsList from "./components/SettingsList";
import UserData from "./components/UserData";
import { BlurView } from "expo-blur";

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/profileBackground.png")}
      style={styles.container}
    >
        <BlurView intensity={15} style={styles.container}>

        <View className="py-5">
          <StatusBar />
          <View style={styles.header}>
            <Text style={styles.text}>Perfil</Text>
          </View>
        </View>
        <UserData />
        <SettingsList />
        </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Make the container transparent to show the background image
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "black",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
