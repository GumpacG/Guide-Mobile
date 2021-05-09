import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StartUpScreen from "./screens/StartUpScreen";
import HomeScreen from "./screens/HomeScreen";
import colors from "./config/colors";
import AreaScreen from "./screens/AreaScreen";
import SubAreaScreen from "./screens/SubAreaScreen";
import Introduction from "./screens/IntroductionScreen";

export default function getScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.navigation_text_header,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Start"
        component={StartUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Area"
        component={AreaScreen}
        options={({ route }) => ({ title: route.params.area })}
      />
      <Stack.Screen
        name="Sub-Area"
        component={SubAreaScreen}
        options={({ route }) => ({ title: route.params.area })}
      />
      <Stack.Screen
        name="Introduction"
        component={Introduction}
        options={({ route }) => ({ title: route.params.area })}
      />
    </Stack.Navigator>
  );
}
