import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View, Button } from "react-native";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Shared Values"
        //@ts-ignore
        onPress={() => navigation.navigate("SharedValues")}
      />
      <Button
        title="Animations"
        //@ts-ignore
        onPress={() => navigation.navigate("Animations")}
      />
      <Button
        title="Gestures"
        //@ts-ignore
        onPress={() => navigation.navigate("Gestures")}
      />
    </View>
  );
}
