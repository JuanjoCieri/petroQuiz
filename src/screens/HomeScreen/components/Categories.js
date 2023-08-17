import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Categories() {
  return (
    <View>
      <View className="py-10">
        <Text style={styles.Title} className="text-3xl">
          Categorias
        </Text>
      </View>
      <ScrollView style={styles.CategoriesContainer}>
        <View style={styles.CategoryDiv}></View>
        <View style={styles.CategoryDiv}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: "#371B1B",
    fontWeight: "500",
  },
  CategoriesContainer: {
    
  },
  CategoryDiv: {
    width: 149,
    height: 149,
    backgroundColor: "red"
  }
});
