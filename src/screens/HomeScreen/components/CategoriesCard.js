import { Text, View, StyleSheet } from "react-native";

export default function CategoriesCard({ categoryName, categoryIcon }) {
  return (
    <View style={styles.CategoryDiv}>
      <Text>{categoryName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  CategoryDiv: {
    width: "100%",
    height: 104,
    backgroundColor: "#F9CA86",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
});
