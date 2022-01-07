import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  SharedValue,
} from "react-native-reanimated";

export function SlideComponent() {
  const animation = useSharedValue(1);
  const [width, setWidth] = useState(0);

  const startAnimation = () => {
    animation.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      animation.value = withTiming(1, { duration: 500 });
    }, 2000);
  };

  return (
    <View style={styles.screen}>
      <View
        style={styles.card}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
      >
        <InteractiveComponent animationValue={animation} maxWidth={width} />
        <DefaultComponent
          animationValue={animation}
          startAnimation={startAnimation}
        />
      </View>
    </View>
  );
}

interface DefaultComponentProps {
  animationValue: SharedValue<number>;
  startAnimation: () => void;
}

const DefaultComponent = ({
  animationValue,
  startAnimation,
}: DefaultComponentProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
      transform: [{ scale: animationValue.value === 0 ? 0 : 1 }],
    };
  });
  return (
    <Animated.View style={[styles.cardContent, animatedStyles]}>
      <Animated.Text>5.18</Animated.Text>
      <TouchableOpacity
        style={styles.button}
        onPress={startAnimation}
      ></TouchableOpacity>
    </Animated.View>
  );
};

interface InteractiveComponentProps {
  animationValue: SharedValue<number>;
  maxWidth: number;
}
const InteractiveComponent = ({
  animationValue,
  maxWidth,
}: InteractiveComponentProps) => {
  const [amount, setAmount] = useState(0);

  const add = () => {
    setAmount((amount) => amount + 1);
  };
  const remove = () => {
    setAmount((amount) => amount - 1);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: 1 - animationValue.value,
      transform: [{ translateX: animationValue.value * maxWidth }],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={[
          styles.cardContent,
          animatedStyles,
          { transform: [{ translateX: 0 }] },
        ]}
      >
        <TouchableOpacity style={styles.button} onPress={remove} />
        <Text>{amount}</Text>
        <TouchableOpacity style={[styles.button]} onPress={add} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 64,
    paddingHorizontal: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    height: 50,
  },

  cardContent: {
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    borderColor: "black",
    borderWidth: 1,
  },
});
