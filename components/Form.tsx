import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "./Title";
import Input from "./Input";

export default function Form() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Input></Input>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
});
