import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

export default function Categories() {
  return (
    <View>
      <View className="py-10">
        <Text style={styles.Title} className="text-3xl">
          Categorias
        </Text>
      </View>
      <View style={styles.cards}>
        <View style={styles.CategoryDiv}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require(`../../../../assets/categoryIcons/equipamientoIcon.png`)}
          />
          <Text style={styles.Text}>Equipamiento</Text>
        </View>
        <View style={styles.CategoryDiv}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require(`../../../../assets/categoryIcons/metodosIcon.png`)}
          />
          <Text style={styles.Text}>Metodos</Text>
        </View>
        <View style={styles.CategoryDiv}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require(`../../../../assets/categoryIcons/maniobraIcon.png`)}
          />
          <Text style={styles.Text}>Maniobra</Text>
        </View>
        <View style={styles.CategoryDiv}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require(`../../../../assets/categoryIcons/MDPIcon.png`)}
          />
          <Text style={styles.Text}>MDP</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: "#371B1B",
    fontWeight: "500",
  },
  cards: {
    gap: 20,
  },
  CategoryDiv: {
    flexDirection: "row",
    width: "100%",
    height: 104,
    backgroundColor: "#F9CA86",
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    gap: 60,
  },
  Text: {
    fontSize: 15,
    fontWeight: "700",
  },
  CategoryImage: {
    width: 40,
    height: 40,
  },
});
