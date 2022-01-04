import { Button, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";

export function SharedValues() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const springOptions: WithSpringConfig = {
    damping: 20, // jumpyness -> lower is more jumpy
    mass: 1, // -> speed - higher = faster
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offsetX.value * 200, springOptions),
        },
        {
          translateY: withSpring(offsetY.value * 300, springOptions),
        },
      ],
    };
  });

  const updateSharedValue = () => {
    offsetX.value = Math.random();
    offsetY.value = Math.random();
  };

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={updateSharedValue} title="Randomize" />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 16,
  },
});
