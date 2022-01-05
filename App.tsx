import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./src/screens/Home";
import { SharedValues } from "./src/screens/SharedValues";
import { AnimationsScreen } from "./src/screens/Animations";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SharedValues" component={SharedValues} />
        <Stack.Screen name="Animations" component={AnimationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
