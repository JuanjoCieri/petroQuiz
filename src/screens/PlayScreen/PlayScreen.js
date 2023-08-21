import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SpinWheel from "./components/SpinWheel";

export default function PlayScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOptionSelected = (option) => {
    setSelectedCategory(option); 
  };

  return (
    <View style={styles.container}>
      {selectedCategory ? (
        <View>
          <Text>{selectedCategory}</Text>
        </View>
      ) : (
        <SpinWheel onOptionSelected={handleOptionSelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "100%",
  },
});
