import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboard from "../Screens/Onboard";
const Stack = createStackNavigator();
export default function OnBoardStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboard" component={Onboard} />
    </Stack.Navigator>
  );
}
