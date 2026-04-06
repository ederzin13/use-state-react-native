import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Title from "./Title";
import Input from "./Input";

export default function Form() {
  const [accessAuthorized, setAccess] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Title></Title>
      {accessAuthorized && <Text>Acesso liberado</Text>}

      {!accessAuthorized && <Input onAuthorize={() => setAccess(true)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
});
