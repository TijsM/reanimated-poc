import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function IndividualComponents() {
  const animation = useSharedValue(1);

  const startAnimation = () => {
    console.log("start");
    animation.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      animation.value = withTiming(1, { duration: 500 });
    }, 2000);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Price animationValue={animation} />
        <Minus animationValue={animation} />
        <Amount animationValue={animation} />
        <Plus animationValue={animation} />

        <AddToCart startAnimation={startAnimation} animationValue={animation} />
      </View>
    </View>
  );
}

interface PriceProps {
  animationValue: SharedValue<number>;
}
const Price = ({ animationValue }: PriceProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
    };
  });
  return <Animated.Text style={[animatedStyles]}>5.35</Animated.Text>;
};

interface AmountProps {
  animationValue: SharedValue<number>;
}
const Amount = ({ animationValue }: PriceProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: 1 - animationValue.value,
    };
  });
  return <Animated.Text style={[{}, animatedStyles]}>5</Animated.Text>;
};

const Plus = ({ animationValue }: MinusProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: 1 - animationValue.value,
    };
  });
  return <Animated.View style={[styles.button, {}, animatedStyles]} />;
};
interface MinusProps {
  animationValue: SharedValue<number>;
}
const Minus = ({ animationValue }: MinusProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: 1 - animationValue.value,
    };
  });
  return <Animated.View style={[styles.button, {}, animatedStyles]} />;
};

interface AddToCartProps {
  startAnimation: () => void;
  animationValue: SharedValue<number>;
}
const AddToCart = ({ startAnimation, animationValue }: AddToCartProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
    };
  });
  return (
    <Animated.View style={animatedStyles}>
      <TouchableOpacity style={[styles.button]} onPress={startAnimation} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    height: 50,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    borderColor: "black",
    borderWidth: 1,
  },
});
