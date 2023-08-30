import { Provider } from "react-redux";
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

// WebBrowser.maybeCompleteAuthSession();

export default function App() {
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   iosClientId:
  //     "611019823270-2rahov9v0p3fqufrebtv5io6ekdegn2m.apps.googleusercontent.com",
  //   androidClientId:
  //     "611019823270-jvic2hkktr81eprhfrg4u08ti57d69ov.apps.googleusercontent.com",
  // },
  // {native: "blank://"});
  // useEffect(() => {
  //   if (response?.type == "success") {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //   }
  // }, [response]);
  // return <LandingScreen promptAsync={promptAsync}/>
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
