import { useState, useEffect } from "react";

export function useGameLogic(
  correctAnswer,
  incorrectAnswers,
  handleOptionSelected
) {
  const [counter, setCounter] = useState(30);
  const [intervalId, setIntervalId] = useState(null);
  const [isCorrectView, setIsCorrectView] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const allOptions = [...incorrectAnswers, correctAnswer];

  useEffect(() => {
    if (counter === 0) {
      clearInterval(intervalId);
      handleOptionClick(null);
    }
  }, [counter]);

  useEffect(() => {
    if (counter > 0 && !intervalId) {
      const id = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      setIntervalId(id);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, []);

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
    counter,
    isCorrectView,
    isCorrect,
    selectedOption,
    allOptions,
    handleOptionClick,
    hasAnswered,
  };
}
