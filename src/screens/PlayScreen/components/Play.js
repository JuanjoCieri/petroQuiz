import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Play({
  category,
  correctAnswer,
  incorrectAnswers,
  question,
  handleOptionSelected
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const allOptions = [...incorrectAnswers, correctAnswer];

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    const isCorrect = option === correctAnswer;
    handleOptionSelected(category, isCorrect);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar />
        <View className="pt-7">
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        {allOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionClick(option)}
            style={[
              styles.answerBox,
              {
                backgroundColor:
                  option === selectedOption
                    ? option === correctAnswer
                      ? "green"
                      : "red"
                    : "white",
              },
            ]}
          >
            <View>
              <Text
                style={{
                  color:
                    option === selectedOption
                      ? option === correctAnswer
                        ? "white"
                        : "black"
                      : "black",
                  textAlign: "center",
                }}
              >
                {option}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "100%",
  },
  header: {
    width: "100%",
    height: "15%",
    backgroundColor: "#A8593E",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "100%",
    height: "85%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryText: {
    color: "white",
    fontSize: 25,
  },
  questionBox: {
    width: "100%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  answerBox: {
    width: "100%",
    height: "10%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 400,
    textAlign: "center",
  },
  answerText: {
    textAlign: "center",
  },
});
