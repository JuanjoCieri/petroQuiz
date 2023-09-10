import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDRt_kYb0cjDbPfl928YP9wFO5PpALxSNM",
  authDomain: "petroquiz-e2c73.firebaseapp.com",
  projectId: "petroquiz-e2c73",
  storageBucket: "petroquiz-e2c73.appspot.com",
  messagingSenderId: "611019823270",
  appId: "1:611019823270:web:f40c30cb77c3678c19bc67",
  measurementId: "G-1J03ZJ69XH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// export const firebaseConfig = {
//   apiKey: "AIzaSyDRt_kYb0cjDbPfl928YP9wFO5PpALxSNM",
//   authDomain: "petroquiz-e2c73.firebaseapp.com",
//   projectId: "petroquiz-e2c73",
//   storageBucket: "petroquiz-e2c73.appspot.com",
//   messagingSenderId: "611019823270",
//   appId: "1:611019823270:web:f40c30cb77c3678c19bc67",
//   measurementId: "G-1J03ZJ69XH"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// // Configura la persistencia utilizando AsyncStorage
// const authPersistence = getReactNativePersistence(ReactNativeAsyncStorage);

// // Inicializa Firebase Auth con la persistencia
// initializeAuth(auth, {
//   persistence: authPersistence
// });

// export { auth };
