import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function NewTournamentButton({openModal}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => openModal()}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Crear nuevo</Text>
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
    height: 50,
    backgroundColor: "#D77600",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
});
