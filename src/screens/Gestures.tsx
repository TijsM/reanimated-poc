import { StyleSheet, View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export function GestureScreen() {
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? "red" : "blue",
      // transform: [{ scale: withSpring(pressed.value ? 1.2 : 1, {}) }],
      transform: [
        { scale: withTiming(pressed.value ? 1.3 : 1, { duration: 200 }) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <TapGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[styles.circle, animatedStyles, {}]}
        ></Animated.View>
      </TapGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
