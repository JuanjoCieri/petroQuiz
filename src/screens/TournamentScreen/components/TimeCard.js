import { StyleSheet, Text, View } from "react-native";
import useCalculateTimeRemainingWithLimits from "../../../hooks/useCalculateTimeRemainingWithLimits";
import useCalculateTimeRemaining from "../../../hooks/useCalculateTimeRemaing";

export default function TimeCard ({tournamentInit, tournamentStart, tournamentFinish}) {
  const timeRemaining = useCalculateTimeRemaining(tournamentStart, tournamentFinish);
  console.log(tournamentStart, "acá START")
  console.log(tournamentFinish, "acá FINISH")

  console.log(timeRemaining)

    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>
                {timeRemaining}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        paddingHorizontal: 80,
        paddingVertical: 10,
        borderRadius: 10
    }
})