import { Button, Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";

export function SharedValues() {
  const boxSize = 50;
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const offsetX = useSharedValue((screenWidth - boxSize) / 2);
  const offsetY = useSharedValue((screenHeight - boxSize) / 2);

  const springOptions: WithSpringConfig = {
    damping: 20, // jumpyness -> lower is more jumpy
    mass: 1, // -> speed - higher = faster
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            offsetX.value * screenWidth - boxSize,
            springOptions
          ),
        },
        {
          translateY: withSpring(
            offsetY.value * screenHeight - boxSize,
            springOptions
          ),
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
