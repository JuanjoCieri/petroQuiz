import { useEffect, useState } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useDispatch } from "react-redux";
import { postAuthenticateWithGoogle } from "../redux/Actions"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useGoogleSignIn() {
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function configureGoogleSignIn() {
      try {
        await GoogleSignin.configure({
          webClientId:
            "611019823270-h71ppt61t8q0re3868sb6tc7i95ajj0j.apps.googleusercontent.com",
        });
      } catch (error) {
        console.error("Error configuring Google Sign-In:", error);
      }
    }
    configureGoogleSignIn();
  }, []);

  useEffect(() => {
    if (userInfo) {
      const payload = {
        name: userInfo.user.name,
        email: userInfo.user.email,
        photo: userInfo.user.photo,
        id: userInfo.user.id,
      };
      dispatch(postAuthenticateWithGoogle(payload));
      const saveUserIdToAsyncStorage = async () => {
        try {
          await AsyncStorage.setItem("@userId", userInfo.user.id);
          console.log('ID guardado en AsyncStorage');
        } catch (error) {
          console.error('Error al guardar ID en AsyncStorage', error);
        }
      };
      saveUserIdToAsyncStorage();
    }
  }, [userInfo, dispatch]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userrInfo = await GoogleSignin.signIn();
      setUserInfo(userrInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("Inicio de sesión cancelado.");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Inicio de sesión en progreso.");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Servicios de Google Play no disponibles.");
      } else {
        console.error("Error en el inicio de sesión de Google:", error);
      }
    }
  };

  return { userInfo, signIn };
}
