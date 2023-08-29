import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import RankingList from "./components/RankingList";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import TopThree from "./components/TopThree";
import { BlurView } from "expo-blur";

export default function Leaderboard() {
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../../../assets/profileBackground.png")}
      style={styles.container}
    >
      <BlurView intensity={15} style={styles.container}>
        <View className="py-5">
          <StatusBar />
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBackToHome}>
              <ChevronLeftIcon size={30} color="black" />
            </TouchableOpacity>
            <Text className="text-3xl">Ranking</Text>
            <ChevronLeftIcon size={30} color="transparent" />
          </View>
        </View>
        <TopThree />
        <RankingList />
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },
});
