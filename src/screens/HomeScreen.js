import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import colors from "../config/colors";
import data from "../data";
import OptionsListItem from "../components/OptionsListItem";

// The screen users immediately see after the start up screen
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {getOptions(navigation)}
    </SafeAreaView>
  );
}

// Helper function to map over the main options in the current screen
function getOptions(navigation) {
  const options = data.homeOptions;

  return options.map((option) => {
    return (
      <OptionsListItem navigation={navigation} option={option} key={option} />
    );
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
