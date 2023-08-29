import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NewGame() {
  const navigation = useNavigation();

  const handleStartGame = () => {
    navigation.navigate("PlayScreen");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleStartGame}>
      <View style={styles.left}>
        <Text style={styles.playText}>Nueva Partida</Text>
      </View>
      <View style={styles.right}>
        <Image
          style={styles.image}
          source={require("../../../../assets/homePlay/petroleumBase22.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#897B68",
    height: 97,
    borderRadius: 20,
    flexDirection: "row",
  },
  playText: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
  left: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
    paddingHorizontal: 20,
  },
  right: {
    width: "50%",
    height: "100%",
  },
  image: {
    position: "relative",
    // height: "100%",
    height: 97,
    width: 191,
    right: 0,
    top: 0,
  },
});
