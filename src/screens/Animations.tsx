import { useRef, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

export function AnimationsScreen() {
  const [direction, setDirection] = useState<"row" | "column">("column");
  const ref = useRef(null);

  const update = () => {
    // @ts-ignore
    ref.current && ref?.current.animateNextTransition();

    direction === "column" && setDirection("row");
    direction === "row" && setDirection("column");
  };

  const transition = (
    <Transition.Change durationMs={400} interpolation="easeInOut" />
  );

  return (
    <>
      <View style={{ marginTop: 50 }}>
        <Button title="Change layout" onPress={update} />
      </View>
      <Transitioning.View
        transition={transition}
        style={[styles.container, { flexDirection: direction }]}
        ref={ref}
      >
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </Transitioning.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
  },
  box: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 16,
  },
});
