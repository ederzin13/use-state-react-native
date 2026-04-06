import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";

type InputProps = {
  onAuthorize: () => void;
};

export default function Input({ onAuthorize }: InputProps) {
  // Definição do estado com valor inicial (neste caso, string vazia)
  const [name, setName] = useState<string>("");
  const [isDisabled, setDisabled] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type your full name"
        value={name}
        onChangeText={(text) => {
          setName(text);

          setDisabled(text === "");
        }}
      ></TextInput>

      <TouchableOpacity style={styles.button}>
        <Button
          title="Request access"
          //por que o botão fica cinza?
          color={isDisabled ? "#4a4a4a" : "#c73aff"}
          onPress={() => {
            if (!isDisabled) {
              onAuthorize();
            }
          }}
          disabled={isDisabled}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    gap: 50,
  },

  input: {
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#898989",
    height: 60,
    padding: 20,
  },

  button: {
    borderRadius: 50,
    alignSelf: "center",
    width: 100,
  },
});
