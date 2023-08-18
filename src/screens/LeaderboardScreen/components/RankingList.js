import { View, StyleSheet, Text } from "react-native";

export default function RankingList () {
    return (
        <View style={styles.container}>
            <Text>Hola</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      width: "100%",
      height: "50%",
      borderRadius: 40,
      position: "absolute",
      bottom: 0
    },
  });