import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerStyle: { backgroundColor: "yellow" } }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTintColor: "blue", headerTitle: "Sign in" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTintColor: "red", headerTitle: "Sign up" }}
        initialParams={{ text: "hello!" }}
      />
    </Stack.Navigator>
  );
}
