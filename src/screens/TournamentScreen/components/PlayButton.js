import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function PlayButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} >
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Jugar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 200,
      height: 60,
      backgroundColor: "#D77600",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      borderRadius: 20,
    },
  });
  