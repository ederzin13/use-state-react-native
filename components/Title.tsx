import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visitor identification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontSize: 30,
  },
});
