import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import SpinWheel from "./components/SpinWheel";
import Play from "./components/Play";
import IsCorrectModal from "./components/IsCorrectModal";
import questions from "../../mocks/questions";
import Results from "./components/Results";

export default function PlayScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrectModalVisible, setIsCorrectModalVisible] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const handleOptionSelected = (option, isCorrect) => {
    setTimeout(() => {
      setSelectedCategory(null);
      setRandomQuestion(null);
      setIsCorrectModalVisible(true);
    }, 1500);

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }

    if (questionsAnswered + 1 === 10) {
      setIsLastQuestion(true);
    }
  };

  const closeModal = () => {
    setIsCorrectModalVisible(false);

    if (!isLastQuestion) {
      setQuestionsAnswered(questionsAnswered + 1);

      setSelectedCategory(null);
      setRandomQuestion(null);
    }
  };

  useEffect(() => {
    if (questionsAnswered <= 3) {
      setSelectedCategory(null);
      setRandomQuestion(null);

      const filteredQuestions = questions.filter(
        (question) => question.category !== selectedCategory
      );

      const randomQuestion =
        filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];

      setRandomQuestion(randomQuestion);
    }
  }, [questionsAnswered]);

  return (
    <View style={styles.container}>
      {questionsAnswered < 3 ? (
        selectedCategory && randomQuestion ? (
          <Play
            category={randomQuestion.category}
            correctAnswer={randomQuestion.correctAnswer}
            incorrectAnswers={randomQuestion.incorrectAnswers}
            question={randomQuestion.question.text}
            handleOptionSelected={handleOptionSelected}
          />
        ) : (
          <SpinWheel
            onOptionSelected={setSelectedCategory}
            questionsAnswered={questionsAnswered}
          />
        )
      ) : (
        <Results score={score} />
      )}

      <IsCorrectModal
        isVisible={isCorrectModalVisible}
        isCorrect={score > 0}
        onClose={closeModal}
      />
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
