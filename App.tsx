import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./src/screens/Home";
import { SharedValues } from "./src/screens/SharedValues";
import { AnimationsScreen } from "./src/screens/Animations";
import { GestureScreen } from "./src/screens/Gestures";
import { BofrostScreen } from "./src/screens/Bofrost";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SharedValues" component={SharedValues} />
        <Stack.Screen name="Animations" component={AnimationsScreen} />
        <Stack.Screen name="Gestures" component={GestureScreen} />
        <Stack.Screen name="Bofrost" component={BofrostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
