import React, { useEffect, useState } from "react";
import { Text, View, StatusBar } from "react-native";
import styled, { css } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { AppNavigator } from "./navigator/AppNavigator";

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
