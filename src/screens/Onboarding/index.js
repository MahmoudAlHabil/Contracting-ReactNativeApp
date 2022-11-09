import React, { useState } from "react";
import { View, useWindowDimensions, FlatList } from "react-native";
import { Icons } from "../../utils";
import styles from "./styles";
import { Button } from "../../components";
import Dots from "./components/Dots";
import OnboardingItem from "./components/OnboardingItem";
const data = [
  {
    id: 1,
    imageUrl: Icons.logo1,
  },
  {
    id: 2,
    imageUrl: Icons.logo2,
  },
  {
    id: 3,
    imageUrl: Icons.logo2,
  },
];

const Onboarding = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = (event) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        pagingEnabled
        disableIntervalMomentum
        onScroll={handleOnScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <OnboardingItem imageUrl={item.imageUrl} />}
      />
      <View style={styles.dots}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={styles.dotsContentContainerStyle}
          renderItem={({ index }) => (
            <Dots index={index} activeIndex={activeIndex} />
          )}
        />
      </View>
      <Button
        title="تخطي"
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={() => navigation.navigate("HomeTab")}
      />
    </View>
  );
};

export default Onboarding;
