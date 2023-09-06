import { Provider, useDispatch } from "react-redux";
import AppNavigation from "./src/navigation/appNavigation";
import { store } from "./src/redux/store";
// import * as Google from "expo-auth-session/providers/google";
// import {
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithCredential,
// } from "firebase/auth";
// import * as WebBrowser from "expo-web-browser";
// import { auth } from "./firebase-config";
// import { useEffect } from "react";
// import LandingScreen from "./src/screens/LandingScreen/LandingScreen";
// import { postAuthenticateWithGoogle } from "./src/redux/Actions";

// WebBrowser.maybeCompleteAuthSession();

export default function App() {
  // const dispatch = useDispatch();
  // const [request, response, promptAsync] = Google.useAuthRequest(
  //   {
  //     iosClientId:
  //       "611019823270-2rahov9v0p3fqufrebtv5io6ekdegn2m.apps.googleusercontent.com",
  //     androidClientId:
  //       "611019823270-jvic2hkktr81eprhfrg4u08ti57d69ov.apps.googleusercontent.com",
  //     webClientId:
  //       "611019823270-h71ppt61t8q0re3868sb6tc7i95ajj0j.apps.googleusercontent.com",
  //   },
  //   { native: "blank://" }
  // );
  // useEffect(() => {
  //   if (response?.type == "success") {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //   }
  // }, [response]);
  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const payload = {
  //         uid: user.uid,
  //         displayName: user.displayName,
  //         email: user.email,
  //         photoURL: user.photoURL,
  //       };
  //       dispatch(postAuthenticateWithGoogle(payload));
  //     }
  //   });
  //   return () => unsub();
  // }, []);

  return (
    <Provider store={store}>
      {/* <LandingScreen promptAsync={promptAsync} /> */}
      <AppNavigation />
    </Provider> 
  );
}
