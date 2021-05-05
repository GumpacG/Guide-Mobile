import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import colors from "./src/config/colors";
import getScreenStack from "./src/ScreenStack";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {getScreenStack()}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
