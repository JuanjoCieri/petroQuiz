import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

export default function IsCorrectModal({ isVisible, isCorrect, onClose }) {
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            {isCorrect ? "Respuesta Correcta" : "Respuesta Incorrecta"}
          </Text>
          <Text style={styles.scoreChangeText}>
            {isCorrect ? "Sumas 1 punto" : "Restas 1 punto"}
          </Text>
          <Text style={styles.closeText} onPress={onClose}>
            Cerrar
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: 300,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  scoreChangeText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  closeText: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});
