import React from "react";
import Onboard from "./Screens/Onboard";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardStack from "./Nav/OnBoardStack";
import { OnboardContext } from "./Context/OnboardContext";
import HomeStack from "./Nav/HomeStack";

export default function Main() {
  const { done } = React.useContext(OnboardContext);
  return (
    <NavigationContainer>
      {done ? <HomeStack /> : <OnBoardStack />}
    </NavigationContainer>
  );
}
