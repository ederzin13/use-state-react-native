import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FullScreen from "./screen-wrappers/FullScreen";

export default function App() {
  return (
    <FullScreen>
      <Text>Text</Text>
    </FullScreen>
  );
}
