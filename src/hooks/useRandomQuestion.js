import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomQuestion } from "../redux/Actions";

export function useRandomQuestion(selectedCategory, questionsAnswered) {
  const [isLoading, setIsLoading] = useState(false);
  const randomQuestion = useSelector((state) => state.randomQuestion);
  const [isRandomQuestion, setIsRandomQuestion] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (questionsAnswered <= 3 && selectedCategory) {
      setIsRandomQuestion(false);
      setIsLoading(true);
      
      dispatch(getRandomQuestion(selectedCategory.id))
        .then((response) => {
          setIsLoading(false);
          setIsRandomQuestion(true);
        })
        .catch((error) => {
          console.error("Error al obtener la pregunta aleatoria:", error);
          setIsLoading(false);
          setIsRandomQuestion(true);
        });
    }
  }, [questionsAnswered, dispatch, selectedCategory]);

  return { randomQuestion, isLoading, isRandomQuestion };
}
