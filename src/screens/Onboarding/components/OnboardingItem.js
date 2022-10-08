import React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

const OnboardingItem = ({ imageUrl }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.imageContainer, { width: width }]}>
      <SvgXml xml={imageUrl} />
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
