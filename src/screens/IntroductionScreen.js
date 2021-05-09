import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import data from "../data";
import fontSizes from "../config/fontSizes";
import colors from "../config/colors";

// This screen will give users details, maps, and the climbs in the area
function IntroductionScreen({ route }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.container_content}
    >
      <Image
        style={styles.image}
        source={{
          width: 300,
          height: 400,
          uri:
            "https://altusmountainguides.com/wp-content/uploads/2015/05/IMG_1834-768x1024.jpg",
        }}
        resizeMode="contain"
      />
      <Text style={styles.introduction_text}>
        {data.introductions[route.params.area]}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container_content: { alignItems: "center" },
  introduction_text: {
    color: "black",
    padding: "5%",
    textAlign: "justify",
    fontSize: fontSizes.introduction_text,
    flex: 1,
  },
  image: {
    marginTop: "5%",
  },
});

export default IntroductionScreen;
