import {View, StyleSheet} from "react-native"
import SpinWheel from "./components/SpinWheel"

export default function PlayScreen () {
  return (
    <View style={styles.container}>
      <SpinWheel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "100%",
  },
});


// F9CA86