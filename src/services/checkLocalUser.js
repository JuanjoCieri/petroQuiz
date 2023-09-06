import AsyncStorage from "@react-native-async-storage/async-storage";
export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("my-key");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};