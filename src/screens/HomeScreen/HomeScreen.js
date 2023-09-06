import { ScrollView, Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Title from "./components/Title";
import NewGame from "./components/NewGame";
import Categories from "./components/Categories";
import { useDispatch } from "react-redux";
import { postAuthenticateWithGoogle } from "../../redux/Actions";

export default function HomeScreen() {
  const dispatch = useDispatch()

  const aad = () => {
    const payload = {
              uid: 987654321,
              displayName: "Juan José",
              email: "juin@hotmail.com.ar",
              photoURL: "https://avatars.githubusercontent.com/u/100518547?s=400&u=a849a45f1772de56fb5cbe869a6dae3a76ee2b8b&v=4",
            };
            dispatch(postAuthenticateWithGoogle(payload));
  }
  return (
    <ScrollView style={styles.container}>
      <Title />
      <NewGame />
      <View>
        <TouchableWithoutFeedback onPress={aad}>
          <Text>Acá</Text>
        </TouchableWithoutFeedback>
      </View>
      <Categories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
