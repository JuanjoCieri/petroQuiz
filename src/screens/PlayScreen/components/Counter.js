import React, { useEffect } from "react";
import { Text } from "react-native";
import { useGameTimer } from "../../../hooks/useGameTimer";

export default function Counter({ handleOptionClick }) {
  const { counter } = useGameTimer();

  useEffect(() => {
    if (counter === 0) {
      handleOptionClick(false); 
    }
  }, [counter, handleOptionClick]);

  return (
    <Text style={{ fontSize: 18, fontWeight: "semibold", color: "white" }}>
      {counter}"
    </Text>
  );
}
