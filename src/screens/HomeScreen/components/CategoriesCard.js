import { Text, View, StyleSheet, Image } from "react-native";
import asd from "../../../../assets/images/spinButtonn.png"

export default function CategoriesCard({ categoryName, categoryIcon }) {
  return (
    <View style={styles.CategoryDiv}>
      {/* <Image source={{ uri: categoryIcon }} style={styles.CategoryImage} /> */}
      <Text style={styles.Text}>{categoryName}</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    gap: 60
  },
  Text: {
    fontSize: 15,
    fontWeight: "700"
  },
  CategoryImage: {
    width: 40,
    height: 40
  },
});
