import React, {useState, useEffect} from "react";
import { BlurView } from "expo-blur";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { postAuthenticateWithGoogle } from "../../redux/Actions";
import useGoogleLogin from "../../hooks/useGoogleLogin";
// import useGoogleLogin from "../../hooks/useGoogleLogin";
// import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
// import auth from '@react-native-firebase/auth';

export default function LandingScreen() {
  const dispatch = useDispatch();
  const loginWithGoogle = useGoogleLogin();

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
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "800" }}>PetroQuiz</Text>
      </View>
      <View>
      <Image style={{width: 350, height: 350}} source={require("../../../assets/landingPage/landingIcon.png")} />
      </View>
      <View style={{gap: 10, paddingHorizontal: 30}}>
        <Text style={{textAlign: "center", fontSize: 30, fontWeight: "600"}}>Compitiendo en el mundo del petróleo.</Text>
        <Text style={{textAlign: "center"}}>Pon a prueba tus conocimientos, desafía a amigos y compite para convertirte en un experto en la industria.</Text>
      </View>
      <View>
        {/* <View>
          <Text>{user?.displayName}</Text>
        </View> */}
        {/* <TouchableOpacity onPress={aad}>
          <Text>Registrarse</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={loginWithGoogle} style={styles.googleButton}>
      <Image style={{width: 25, height: 25}} source={require("../../../assets/landingPage/googleIcon.png")} />
          <Text style={styles.googleButtonText}>Ingresá con Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  googleButton: {
    backgroundColor: "#4081EC",
    paddingHorizontal: 4,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 10
  },
  googleButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});