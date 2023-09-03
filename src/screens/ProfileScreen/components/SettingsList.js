import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  PencilSquareIcon,
  ArrowLeftOnRectangleIcon,
} from "react-native-heroicons/solid";
import { ChatBubbleBottomCenterIcon } from "react-native-heroicons/outline";

export default function SettingsList() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <PencilSquareIcon color={"black"} size={35} />
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ChatBubbleBottomCenterIcon color={"black"} size={35} />
        <Text style={styles.buttonText}>Enviar Pregunta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ArrowLeftOnRectangleIcon color={"black"} size={35} />
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 10,
    // gap: 20,
    justifyContent: "space-around",
  },
  button: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: 20,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 20,
  },
});
