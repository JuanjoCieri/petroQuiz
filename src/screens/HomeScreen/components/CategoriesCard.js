import { Text, View, StyleSheet, Image } from "react-native";

export default function CategoriesCard({ categoryName, categoryIcon }) {
  return (
    <View style={styles.CategoryDiv}>
      <Image source={{ uri: categoryIcon }} style={styles.CategoryImage} />
      <Text>{categoryName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  CategoryDiv: {
    flexDirection: "row",
    width: "100%",
    height: 104,
    backgroundColor: "#F9CA86",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    // paddingLeft: 20,
    // gap: 40
  },
  CategoryImage: {

  },
});
