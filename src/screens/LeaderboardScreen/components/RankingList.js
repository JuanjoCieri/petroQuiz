import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import users from "../../../mocks/users";
import UserCard from "./UserCard";

export default function RankingList() {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={users}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: user }) => (
          <UserCard
            userPosition={user.userId}
            userName={user.userName}
            userPoints={user.userPoints}
            userImage={user.userImage}
          />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
});
