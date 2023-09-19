import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postJoinTournament } from "../../../redux/Actions";

export default function JoinButton(tournamentId) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch()

  const handleJoinTournament = () => {
    const payload = {
      torneoId: tournamentId.tournamentId,
      usuarioId: loggedUser.id,
      nombreUsuario: loggedUser.nombre,
      imagenUsuario: loggedUser.imagen,
    };
    dispatch(postJoinTournament(payload))
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleJoinTournament}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          Unirse
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
});
