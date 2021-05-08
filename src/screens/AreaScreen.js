import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import colors from "../config/colors";
import data from "../data";
import OptionsListItem from "../components/OptionsListItem";

// This screen will give users details, maps, and the climbs in the area
function AreaScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      {getOptions(navigation, route)}
    </SafeAreaView>
  );
}

// Helper function to map over the Area options in the current screen
function getOptions(navigation, route) {
  const options = data.areaOptions;

  return options.map((option) => {
    return (
      <OptionsListItem
        navigation={navigation}
        option={option}
        key={option}
        area={route.params.area}
      />
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

export default AreaScreen;
