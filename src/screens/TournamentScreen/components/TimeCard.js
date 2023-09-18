import { StyleSheet, Text, View } from "react-native";
import useCalculateTimeRemainingWithLimits from "../../../hooks/useCalculateTimeRemainingWithLimits";

export default function TimeCard ({tournamentInit, tournamentCreation, tournamentFinish}) {
  const timeRemaining = useCalculateTimeRemainingWithLimits(tournamentInit, tournamentCreation, tournamentFinish);

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