import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        // backgroundColor: "#eee",
      },
      // headerTintColor: "#444",
    }}
    headerMode="screen"
  >
    {/* other options: "float", "screen" */}
    <Screen
      options={{
        headerTitle: (props) => <Header {...props} />,
        headerTitleAlign: "center",
      }}
      name="Home"
      component={Home}
    />
    <Screen
      options={
        {
          // headerTitle: (props) => <Header {...props} />,
        }
      }
      name="ReviewDetails"
      component={ReviewDetails}
    />
  </Navigator>
);

export default HomeStack;
