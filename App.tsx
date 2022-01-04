import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./src/screens/Home";
import { SharedValues } from "./src/screens/SharedValues";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SharedValues" component={SharedValues} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
