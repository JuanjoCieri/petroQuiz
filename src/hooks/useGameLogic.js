import { useState } from "react";
import { shuffleArray } from "../services/shuffleArray";

export function useGameLogic(
  correctAnswer,
  incorrectAnswers,
  handleOptionSelected
) {
  const [isCorrectView, setIsCorrectView] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const all = [...incorrectAnswers, correctAnswer];

  const allOptions = shuffleArray(all)

  const handleOptionClick = (option) => {
    if (!hasAnswered) {
      setSelectedOption(option);
      const isCorrect = option === correctAnswer;
      setIsCorrect(isCorrect);
      setIsCorrectView(true);
      setHasAnswered(true);
      setTimeout(() => {
        handleOptionSelected(isCorrect);
        setIsCorrectView(false);
      }, 1500);
    }
  };

  return {
    isCorrectView,
    isCorrect,
    selectedOption,
    allOptions,
    handleOptionClick,
    hasAnswered,
  };
}
