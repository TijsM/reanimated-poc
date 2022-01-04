import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { View, Button } from "react-native";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="shared animations"
        //@ts-ignore
        onPress={() => navigation.navigate("SharedValues")}
      />
    </View>
  );
}
