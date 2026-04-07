import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

type BtnProps = {
  isDisabled: boolean;
};

export default function Btn({ isDisabled }: BtnProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Button title="Request access" color="#c73aff" disabled={isDisabled} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    alignSelf: "center",
    width: 100,
  },

  button: {},
});
