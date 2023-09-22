import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setCurrentTournament } from "../../../redux/Actions";
import useCalculateTimeRemaining from "../../../hooks/useCalculateTimeRemaing";

export default function PlayButton({ tournamentDetail }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const timeRemaining = useCalculateTimeRemaining(
    tournamentDetail.fechaInicio,
    tournamentDetail.fechaFinalizacion
  );

  const handleStartGame = () => {
    dispatch(setCurrentTournament(tournamentDetail));
    navigation.navigate("PlayTournamentScreen");
  };

  const isDisabled =
    timeRemaining.includes("Empieza en") || timeRemaining === "El torneo ha finalizado";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isDisabled && styles.disabledButton]}
        onPress={handleStartGame}
        disabled={isDisabled}
      >
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          Jugar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: "#D77600",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
});
