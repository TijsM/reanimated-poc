import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  SharedValue,
} from "react-native-reanimated";

export function BofrostScreen() {
  const animation = useSharedValue(1);

  const startAnimation = () => {
    animation.value = withTiming(0);

    setTimeout(() => {
      animation.value = withTiming(1, { duration: 500 });
    }, 2000);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* {animation.value < 0 ? ( */}
        <InteractiveComponent animationValue={animation} />
        {/* ) : ( */}
        <DefaultComponent
          animationValue={animation}
          startAnimation={startAnimation}
        />
        {/* )}kk */}
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
    };
  });
  return (
    <Animated.View style={[styles.cardContent, animatedStyles]}>
      <Animated.Text>sike</Animated.Text>
      <TouchableOpacity
        style={styles.button}
        onPress={startAnimation}
      ></TouchableOpacity>
    </Animated.View>
  );
};

interface InteractiveComponentProps {
  animationValue: SharedValue<number>;
}
const InteractiveComponent = ({
  animationValue,
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
    };
  });

  return (
    <Animated.View style={[styles.cardContent, animatedStyles]}>
      <TouchableOpacity style={styles.button} onPress={remove} />
      <Text>{amount}</Text>
      <TouchableOpacity style={styles.button} onPress={add} />
    </Animated.View>
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
    backgroundColor: "red",
    borderRadius: 32,
  },
});
