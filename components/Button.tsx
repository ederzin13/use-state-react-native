import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn() {
  return (
    <TouchableOpacity style={styles.container}>
      <Button title="Request access" color="#c73aff" />
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
