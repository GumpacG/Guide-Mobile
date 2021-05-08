import React from "react";
import { View, Text } from "react-native";

// This screen will give users details, maps, and the climbs in the area
function SubAreaScreen({ navigation, route }) {
  return (
    <View>
      <Text> {route.params.area} </Text>
    </View>
  );
}

export default SubAreaScreen;
