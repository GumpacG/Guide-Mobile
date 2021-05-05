import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function StartUpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Squamish Bouldering</Text>
      <TouchableOpacity
        style={styles.start_btn}
        onPress={() => navigation.push("Home")}
      >
        <Text style={styles.start_btn_text}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  header: {
    fontSize: 48,
    top: "10%",
    textAlign: "center",
  },
  start_btn: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: "8%",
    width: "30%",
    top: "60%",
  },
  start_btn_text: {
    color: colors.start_btn_text,
    fontSize: 30,
  },
});

export default StartUpScreen;
