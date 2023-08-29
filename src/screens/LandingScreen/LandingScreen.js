import { BlurView } from "expo-blur";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function LandingScreen({ promptAsync }) {
  return (
    <ImageBackground
      source={require("../../../assets/profileBackground.png")}
      style={styles.container}
    >

    <BlurView intensity={15} style={styles.container}>
      <View style={{gap: 100}}>
        <View>
          <Text>Bienvenidos a</Text>
          <Text style={{fontSize: 65}}>PetroQuiz</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => promptAsync()}>
            <Text>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
