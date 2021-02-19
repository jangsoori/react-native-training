import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import About from "../screens/About";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

export default function AboutStack() {
  return (
    <Navigator initialRouteName="About">
      <Screen
        options={{ headerTitle: () => <Header /> }}
        name="About"
        component={About}
      />
    </Navigator>
  );
}
