import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <>
      <View className="py-10">
        <StatusBar />
        <Text style={styles.Title} className="text-5xl">
          PetroQuiz
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: "#371B1B",
    fontWeight: "500",
  },
  container: {
    marginHorizontal: 20,
  },
});
