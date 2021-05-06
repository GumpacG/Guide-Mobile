import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";

import colors from "../config/colors";
import OptionsListItem from "../components/OptionsListItem";

function HomeScreen() {
  return <SafeAreaView style={styles.container}>{getOptions()}</SafeAreaView>;
}

function getOptions() {
  const options = ["Lists", "Areas", "Projects", "Sends"];

  return options.map((option) => {
    return <OptionsListItem option={option} key={option} />;
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
});

export default HomeScreen;
