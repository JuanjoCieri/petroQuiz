import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

const SpinWheel = ({ onOptionSelected, questionsAnswered, score }) => {
  const wheelRef = useRef(new Animated.Value(0));
  const [spinning, setSpinning] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  // Define your wheel data (sections, colors, labels, etc.)
  const wheelData = [
    { label: "history", color: "red" },
    { label: "society_and_culture", color: "blue" },
    { label: "arts_and_literature", color: "green" },
    { label: "music", color: "yellow" },
    { label: "food_and_drink", color: "grey" },
    { label: "science", color: "green" },
  ];

  const onSpin = () => {
    if (!spinning) {
      setSpinning(true);
      const randomAngle = Math.floor(Math.random() * 360);
      const fullSpins = 3;
      const finalAngle = 360 * fullSpins + randomAngle;

      wheelRef.current.setValue(0);

      Animated.timing(wheelRef.current, {
        toValue: finalAngle,
        duration: 3000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      }).start(() => {
        const selectedSection = Math.floor(
          (finalAngle % 360) / (360 / wheelData.length)
        );
        setSelectedOption(wheelData[selectedSection].label);
        onOptionSelected(wheelData[selectedSection].label);
        setSelectedOptionIndex(null); // Store the selected option index
        setSpinning(false);
      });
    }
  };

  // Calculate the rotation angle based on the selected option index
  const rotationAngle =
    selectedOptionIndex == null
      ? 6 * 6 + (360 / wheelData.length) * selectedOptionIndex
      : 0;

  const wheelRotation = wheelRef.current.interpolate({
    inputRange: [0, 6 * 6], // Adjust this to multiple turns (e.g., 6 turns in this case)
    outputRange: ["1deg", `${rotationAngle}deg`], // Rotate to the calculated angle
  });
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          style={{
            width: 330,
            height: 330,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          source={require("../../../../assets/images/spinBackground.png")}
        >
          <Image
            style={{
              position: "absolute",
              top: 14,
              right: "48%",
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("../../../../assets/images/spinArrow.png")}
          />
          <Animated.View
            style={{
              width: 300,
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 150,
              zIndex: -100,
              backgroundColor: "#fff",
              transform: [{ rotate: wheelRotation }],
            }}
          >
            <Image
              style={{ width: 310, height: 310, zIndex: 100 }}
              source={require("../../../../assets/images/Group.png")}
            />
          </Animated.View>
        </ImageBackground>
      </View>
      <View style={{}}>
        <TouchableOpacity
          onPress={onSpin}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../../../../assets/images/Ellip.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.round}>
        <Text style={styles.roundText}>Ronda {questionsAnswered + 1} / 3</Text>
        <Text style={styles.roundText}>|</Text>
        <Text style={styles.roundText}>Puntaje: {score}</Text>
      </View>
    </View>
  );
};

export default SpinWheel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9CA86",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  },
  round: {
    position: "absolute",
    bottom: 0,
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#A8593E",
  },
  roundText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
});
