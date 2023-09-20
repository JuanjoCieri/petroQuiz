import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postNewTournament } from "../../../redux/Actions";

export default function NewTournamentModal({ openModal }) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleCreateTournament = () => {
    if (nombre.trim() === "") {
      setError("El nombre no puede estar vacío");
    } else if (nombre.length > 15) {
      setError("El nombre no puede tener más de 15 caracteres");
    } else {
      dispatch(
        postNewTournament({
          nombre: nombre,
          creadorId: loggedUser.id,
          nombreUsuario: loggedUser.nombre,
          imagenUsuario: loggedUser.imagen
        })
      );
      setError("");
      setNombre("");
      openModal();
    }
  };

  return (
    <BlurView intensity={30} tint="dark" style={styles.container}>
      <View style={styles.modal}>
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 35 }}
        >
          <Text style={styles.userName}>Nombre del Torneo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del torneo"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
          {error !== "" && <Text style={styles.error}>{error}</Text>}
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
    height: "40%",
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
