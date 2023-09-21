import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux"; 
import { getUsersByName } from "../../../redux/Actions";

export default function InputBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const delay = 2000; 

  useEffect(() => {
    let timeoutId;

    const delayedDispatch = () => {
      if (name !== "") {
        dispatch(getUsersByName(name));
      }
    };

    clearTimeout(timeoutId);

    timeoutId = setTimeout(delayedDispatch, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [name, dispatch]);

  const handleInputChange = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar jugador..."
        value={name}
        onChangeText={handleInputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#EFEFEE",
    borderWidth: 1,
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 40,
    justifyContent: "center",
    paddingLeft: 15,
  },
});
