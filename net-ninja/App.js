import React, { useEffect, useState } from "react";
import { Text, View, StatusBar } from "react-native";
import styled, { css } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeStack from "./routes/HomeStack";
import { AppNavigator } from "./routes/Drawer";

const AppHeader = styled.View`
  padding-top: ${() => (Platform.OS === "ios" ? `60px` : `20px`)};
  padding-bottom: 20px;
`;
const Logo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LogoText = styled.Text`
  margin-left: 10px;
  font-weight: 200;
  font-size: 20px;
`;
export default function App() {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar barStyle={"dark-content"} />

        <AppNavigator />
      </>
    );
  }
}
