import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { useGameLogic } from "../../../hooks/useGameLogic";

export default function Play({
  category,
  correctAnswer,
  incorrectAnswers,
  question,
  handleOptionSelected,
}) {
  const {
    counter,
    isCorrectView,
    isCorrect,
    selectedOption,
    allOptions,
    handleOptionClick,
    hasAnswered,
  } = useGameLogic(correctAnswer, incorrectAnswers, handleOptionSelected);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar />
          <View className="pt-7" style={styles.headerData}>
            <View style={styles.left}></View>
            <View style={styles.center}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.timerText}>{counter}"</Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.questionBox}>
            {isCorrectView && (
              <BlurView style={styles.isCorrectView}>
                <Text
                  style={{
                    color: isCorrect ? "green" : "red",
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  {isCorrect ? "¡Correcto!" : "¡Incorrecto!"}
                </Text>
              </BlurView>
            )}
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
              disabled={hasAnswered}
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
    </>
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
  headerData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    width: "20%",
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
  timerText: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "white",
  },
  isCorrectView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    zIndex: 50,
  },
});
