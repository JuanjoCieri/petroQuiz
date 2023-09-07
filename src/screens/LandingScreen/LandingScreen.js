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

/////////////////

import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import { auth } from "../../../firebase-config";
import { useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

export default function LandingScreen() {
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

///////////////////////////////////////

// const dispatch = useDispatch();
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      iosClientId:
        "611019823270-2rahov9v0p3fqufrebtv5io6ekdegn2m.apps.googleusercontent.com",
      androidClientId:
        "611019823270-jvic2hkktr81eprhfrg4u08ti57d69ov.apps.googleusercontent.com",
      webClientId:
        "611019823270-h71ppt61t8q0re3868sb6tc7i95ajj0j.apps.googleusercontent.com",
    },
    { native: "blank://" }
  );
  useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const payload = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        dispatch(postAuthenticateWithGoogle(payload));
      }
    });
    return () => unsub();
  }, []);

//////////////////////////////////////

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
        <View style={{gap: 40}}>
          <TouchableOpacity onPress={aad}>
            <Text>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={promptAsync}>
            <Text>Registrarse Google</Text>
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
