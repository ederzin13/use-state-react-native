import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
import Greetings from "./Greetings";

export default function Input() {
  // Definição do estado com valor inicial (neste caso, string vazia)
  const [name, setName] = useState<string>("");
  const [accessAuthorized, setAccess] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(true);

  //se o acesso estiver autorizado, mostra outro componente com o name
  if (accessAuthorized)
    return (
      <View>
        <Greetings visitorName={name} />
        <Button
          title="Exit"
          onPress={() => {
            setAccess(false);
            setName("");
            setDisabled(true);
          }}
        ></Button>
      </View>
    );

  //caso o acesso não esteja autorizado
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type your name here"
        value={name}
        onChangeText={(text) => {
          setName(text);
          if (text != "") setDisabled(false);
          else setDisabled(true);
        }}
      />

      <Button
        title="Request access"
        color="#c73aff"
        disabled={isDisabled}
        onPress={() => {
          setAccess(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    gap: 20,
  },

  input: {
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#898989",
    height: 60,
    padding: 20,
  },
});
