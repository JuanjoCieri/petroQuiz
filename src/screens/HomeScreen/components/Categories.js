import { Text, View, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native";
import categories from "../../../mocks/categories";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  return (
    <View>
      <View className="py-10">
        <Text style={styles.Title} className="text-3xl">
          Categorias
        </Text>
      </View>
      <ScrollView style={styles.CategoriesContainer}>
        <FlatList
          data={categories}
          ItemSeparatorComponent={() => <Text> </Text>}
          renderItem={({ item: category }) => (
            <CategoriesCard categoryName={category.categoryName} categoryIcon={category.categoryImage}/>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: "#371B1B",
    fontWeight: "500",
  },
  CategoriesContainer: {},
  CategoryDiv: {
    width: 149,
    height: 149,
    backgroundColor: "red",
  },
});
