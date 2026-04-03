import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type FullScreenProps = {
  children: React.ReactNode;
};

export default function FullScreen({ children }: FullScreenProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
