import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import colors from "../config/colors";
import buttons from "../config/buttons";
import ArrowDown from "../icons/ArrowDown.png";

function HomeScreen() {
  return <SafeAreaView style={styles.container}>{getOptions()}</SafeAreaView>;
}

function getOptions() {
  const options = ["Lists", "Areas", "Projects", "Sends"];

  return options.map((option) => {
    return (
      <TouchableOpacity
        style={buttons.options}
        key={option}
        // onPress={() => navigation.push("Home")}
      >
        <Text style={buttons.options_text}>{option}</Text>
        <Image
          resizeMode="contain"
          style={buttons.options_arrow}
          source={ArrowDown}
        />
      </TouchableOpacity>
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
