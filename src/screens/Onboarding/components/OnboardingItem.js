import React, { useMemo } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

const OnboardingItem = ({ imageUrl }) => {
  const { width } = useWindowDimensions();
  const style = useMemo(() => styles(width), [width]);
  return (
    <View style={style.imageContainer}>
      <SvgXml xml={imageUrl} />
    </View>
  );
};

export default OnboardingItem;

const styles = (width) => StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
});
