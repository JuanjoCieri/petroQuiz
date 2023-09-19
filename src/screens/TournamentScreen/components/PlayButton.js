import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch } from "react-redux";
import { setCurrentTournament } from "../../../redux/Actions";

export default function PlayButton(tournamentDetail) {

  console.log(tournamentDetail.tournamentDetail, "acá")

  const dispatch = useDispatch()

  const navigation = useNavigation();

  const handleStartGame = () => {
    dispatch(setCurrentTournament(tournamentDetail.tournamentDetail))
    navigation.navigate("PlayTournamentScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleStartGame}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Jugar</Text>
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
  