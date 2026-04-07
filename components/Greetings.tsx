import { View, Text, StyleSheet } from "react-native";
import React from "react";

type GreetingsProps = {
  visitorName: string;
};

export default function Greetings({ visitorName }: GreetingsProps) {
  return (
    <View>
      <Text style={style.text}>Access granted for {visitorName}!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});
