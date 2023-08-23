import { StatusBar } from "expo-status-bar";
import {View, Text, StyleSheet} from "react-native"
import SettingsList from "./components/SettingsList";
import UserData from "./components/UserData";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View className="py-5">
        <StatusBar />
        <View style={styles.header}>
          <Text className="text-3xl">Perfil</Text>
        </View>
      </View>
      <UserData />
      <SettingsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "100%",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
  },
});
