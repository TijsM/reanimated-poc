import { Button, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export function SharedValues() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offsetX.value * 200,
        },
        {
          translateY: offsetY.value * 300,
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
