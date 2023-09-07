import { useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { postAuthenticateWithGoogle } from "../redux/Actions";
import { auth } from "../../firebase-config";

export default function useGoogleLogin() {
  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "611019823270-2rahov9v0p3fqufrebtv5io6ekdegn2m.apps.googleusercontent.com",
    androidClientId:
      "611019823270-jvic2hkktr81eprhfrg4u08ti57d69ov.apps.googleusercontent.com",
    webClientId:
      "611019823270-h71ppt61t8q0re3868sb6tc7i95ajj0j.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
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

  const loginWithGoogle = () => {
    promptAsync();
  };

  return loginWithGoogle;
}
