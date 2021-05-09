import React from "react";
import { SafeAreaView, Text } from "react-native";

import data from "../data";

// This screen will give users details, maps, and the climbs in the area
function IntroductionScreen({ navigation, route }) {
  return (
    <SafeAreaView>
      <Text>{data.introductions[route.params.area]}</Text>
    </SafeAreaView>
  );
}

export default IntroductionScreen;
