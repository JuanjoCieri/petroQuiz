import React, { useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import SpinWheel from "./components/SpinWheel";
import Play from "./components/Play";
import Results from "./components/Results";
import { useRandomQuestion } from "../../hooks/useRandomQuestion";
export default function PlayScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const handleOptionSelected = (isCorrect) => {
    setSelectedCategory(null);
    setQuestionsAnswered(questionsAnswered + 1);

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }

    if (questionsAnswered + 1 === 10) {
      setIsLastQuestion(true);
    }
  };

  console.log("score", score)

  const { randomQuestion, isLoading, isRandomQuestion } = useRandomQuestion(
    selectedCategory,
    questionsAnswered
  );

  console.log(selectedCategory, isRandomQuestion, randomQuestion)

  return (
    <View style={styles.container}>
      {questionsAnswered < 3 ? (
        selectedCategory && isRandomQuestion ? (
          <Play
            category={selectedCategory.label}
            correctAnswer={randomQuestion?.respuesta_correcta}
            incorrectAnswers={randomQuestion?.respuestas_incorrectas}
            question={randomQuestion?.pregunta}
            handleOptionSelected={handleOptionSelected}
          />
        ) : isLoading ? (
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="orange" />
          </View>
        ) : (
          <SpinWheel
            onOptionSelected={setSelectedCategory}
            questionsAnswered={questionsAnswered}
            score={score}
          />
        )
      ) : (
        <Results score={score} />
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
