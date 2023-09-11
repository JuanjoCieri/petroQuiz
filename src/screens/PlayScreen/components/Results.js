import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postGamePoints } from "../../../redux/Actions";

export default function Results({ score }) {
  const loggedUser = useSelector((state) => state.loggedUser)
  const navigation = useNavigation();

  const handleBackHome = () => {
    navigation.navigate("Home");
  };

  const dispatch = useDispatch()

  useEffect(() => {
    const payload = {
      userId: loggedUser.id,
      points: score
    }
    dispatch(postGamePoints(payload))
  }, [score, loggedUser.id, dispatch])

  return (
    <>
      <View style={styles.container}>
        {score >= 0 ? (
          <ConfettiCannon
            count={100}
            origin={{ x: -10, y: 0 }}
            autoStart={true}
          />
        ) : (
          false
        )}
        <View style={styles.banner}>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            PetroQuiz
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            {score >= 0 ? "Sumas" : "Restas"} {score} {score === 1 ? "punto" : "puntos"}
          </Text>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={handleBackHome}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#371B1B",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
  text: {
    fontSize: 30,
    color: "black",
    fontWeight: "600",
  },
  banner: {
    width: "80%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#371B1B",
  },
});
