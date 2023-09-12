import { BlurView } from "expo-blur";
import { React } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearStateUserDetail } from "../../../redux/Actions";

export default function UserDetailModal() {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  function onClick() {
    dispatch(clearStateUserDetail());
  }
  return (
    <BlurView intensity={30} tint="dark" style={styles.container}>
      <View style={styles.modal}>
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 35 }}
        >
          <Image source={{ uri: userDetail.imagen }} style={styles.userImage} />
          <Text style={styles.userName}>{userDetail.nombre}</Text>
        </View>
        <Text>{userDetail.puntos} puntos</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.button}>Desafiar jugador</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onClick}>
          <Text>Cerrar</Text>
        </TouchableWithoutFeedback>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    width: "70%",
    height: "60%",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    color: "white",
    backgroundColor: "#482523",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
