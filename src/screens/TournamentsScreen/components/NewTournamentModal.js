import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postNewTournament } from "../../../redux/Actions";

export default function NewTournamentModal({ openModal }) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const [tournamentName, setTournamentName] = useState(""); 

  const dispatch = useDispatch();

  const handleCreateTournament = () => {
    if (tournamentName) {
      dispatch(
        postNewTournament({
          nombre: tournamentName,
          creadorId: loggedUser.id,
        })
      );
      openModal();
    }
  };

  return (
    <BlurView intensity={30} tint="dark" style={styles.container}>
      <View style={styles.modal}>
        <View style={{ justifyContent: "center", alignItems: "center", gap: 35 }}>
          <Text style={styles.userName}>Nombre del Torneo:</Text>
          <TextInput
            style={styles.input}
            value={tournamentName}
            onChangeText={(text) => setTournamentName(text)}
            placeholder="Ingrese el nombre del torneo"
          />
        </View>
        <TouchableWithoutFeedback onPress={handleCreateTournament}>
          <Text style={styles.button}>Crear torneo</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={openModal}>
          <Text>Cerrar</Text>
        </TouchableWithoutFeedback>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  userName: {
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    color: "white",
    backgroundColor: "#482523",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
