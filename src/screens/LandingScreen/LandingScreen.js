import { BlurView } from "expo-blur";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { postAuthenticateWithGoogle } from "../../redux/Actions";

export default function LandingScreen({ promptAsync }) {
  const dispatch = useDispatch();

  const aad = () => {
    const payload = {
      uid: "987654321",
      displayName: "Juan José",
      email: "juin@hotmail.com.ar",
      photoURL:
        "https://avatars.githubusercontent.com/u/100518547?s=400&u=a849a45f1772de56fb5cbe869a6dae3a76ee2b8b&v=4",
    };
    dispatch(postAuthenticateWithGoogle(payload));
  };
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
          <TouchableOpacity onPress={aad}>
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
