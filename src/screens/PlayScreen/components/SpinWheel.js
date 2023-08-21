import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
  ImageBackground,
} from "react-native";

const SpinWheel = ({ onOptionSelected }) => {
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
    <View style={{ alignItems: "center", flex: 1 }}>
      <View style={{ marginVertical: 70 }}>
        <ImageBackground
          style={{
            position: "relative",
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
        {selectedOption && (
          <Text style={{ marginTop: 10, fontSize: 18, color: "red" }}>
            Selected Option: {selectedOption}
          </Text>
        )}
        <TouchableOpacity
          onPress={onSpin}
          style={{
            marginTop: 75,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../../../../assets/images/Ellip.png")} />
        </TouchableOpacity>
        <View>
          <Text style={{ position: "absolute" }}>Hola {selectedOption}</Text>
        </View>
      </View>
    </View>
  );
};

export default SpinWheel;
