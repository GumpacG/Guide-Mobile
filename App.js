import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartUpScreen from "./src/screens/StartUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import colors from "./src/config/colors";

export default function App() {
  function stackScreen() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.secondary },
          headerTintColor: colors.navigation_text_header,
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
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer style={styles.container}>
      {stackScreen()}
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
