import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import SpinWheel from "./components/SpinWheel";
import Play from "./components/Play";
import Results from "./components/Results";
import { useDispatch, useSelector } from "react-redux";
import { getRandomQuestion } from "../../redux/Actions";

export default function PlayScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRandomQuestion, setIsRandomQuestion] = useState(false)
  const dispatch = useDispatch();
  const randomQuestion = useSelector((state) => state.randomQuestion);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const handleOptionSelected = (option, isCorrect) => {
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

  useEffect(() => {
    if (questionsAnswered <= 3 && selectedCategory) {
      setIsRandomQuestion(false)
      setIsLoading(true);
      dispatch(getRandomQuestion(selectedCategory.id))
        .then(() => {
          setIsLoading(false); 
          setIsRandomQuestion(true)
        })
        .catch((error) => {
          console.error("Error al obtener la pregunta aleatoria:", error);
          setIsLoading(false); 
          setIsRandomQuestion(true)
        
        });
    }
  }, [questionsAnswered, dispatch, selectedCategory]);

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
          <View><Text>Cargando...</Text></View>
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
