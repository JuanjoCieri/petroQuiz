import { BlurView } from "expo-blur";
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

const SpinWheel = ({
  onOptionSelected,
  onOptionSelectedView,
  questionsAnswered,
  score,
}) => {
  const wheelRef = useRef(new Animated.Value(0));
  const [spinning, setSpinning] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [selectedCategoryView, setSelectedCategoryView] = useState(null);

  // Define your wheel data (sections, colors, labels, etc.)
  const wheelData = [
    { label: "Equipamiento", id: "1" },
    { label: "MDP", id: "4" },
    { label: "Métodos", id: "2" },
    { label: "Principios y Procedimientos", id: "3" },
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
        setSelectedCategoryView(true);
        setSelectedOption(wheelData[selectedSection]);
        setTimeout(() => {
          onOptionSelected(wheelData[selectedSection]);
          setSelectedCategoryView(false);
        }, 2000);
        setSelectedOptionIndex(null); // Store the selected option index
        setSpinning(false);
      });
    }
  };

  // Calculate the rotation angle based on the selected option index
  const rotationAngle =
    selectedOptionIndex == null
      ? 4 * 4 + (360 / wheelData.length) * selectedOptionIndex
      : 0;

  const wheelRotation = wheelRef.current.interpolate({
    inputRange: [0, 4 * 4], // Adjust this to multiple turns (e.g., 6 turns in this case)
    outputRange: ["1deg", `${rotationAngle}deg`], // Rotate to the calculated angle
  });
  return (
    <>
      {selectedCategoryView && (
          <BlurView intensity={60} style={styles.selectedCategoryView}>
            <Text style={styles.selectedCategoryViewText}>{selectedOption?.label}</Text>
          </BlurView>
      )}
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
            source={require("../../../../assets/images/Ellips.png")}
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
                source={require("../../../../assets/images/Group10.png")}
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
            <Image style={{width: 150, height: 150}} source={require("../../../../assets/images/spinButtonn.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.round}>
          <Text style={styles.roundText}>
            Ronda {questionsAnswered + 1} / 3
          </Text>
          <Text style={styles.roundText}>|</Text>
          <Text style={styles.roundText}>Puntaje: {score}</Text>
        </View>
      </View>
    </>
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
    gap: 40,
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
  selectedCategoryView: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    zIndex: 50,
  },
  selectedCategoryViewText: {
    fontSize: 40,
    color: "white",
    fontWeight: "700",
    paddingHorizontal: 20
  }
});
