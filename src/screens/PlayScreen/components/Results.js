import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Results({ score }) {
    const navigation = useNavigation();

  const handleBackHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Has respondido 3 preguntas.</Text>
      </View>
      <View>
        <Text>{score >= 0 ? "Sumas" : "Restas"} {score} puntos</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={handleBackHome}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
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
    color: "white"
  },
});
