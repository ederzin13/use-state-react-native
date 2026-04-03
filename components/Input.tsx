import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Input() {
  // Definição do estado com valor inicial (neste caso, string vazia)
  const [name, setName] = useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="name..."
        value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
  },

  input: {
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#898989",
    height: 55,
    padding: 20,
  },
});
