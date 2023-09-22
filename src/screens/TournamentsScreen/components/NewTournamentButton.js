import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

export default function NewTournamentButton({openModal}) {

  const userLogged = useSelector((state) => state.loggedUser.email)

  const isDisabled = userLogged !== "mlwalker.asblp@gmail.com"

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={isDisabled} style={[styles.button, isDisabled && styles.disabledButton]} onPress={() => openModal()}>
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
  disabledButton: {
    backgroundColor: "#ccc",
  },
});
