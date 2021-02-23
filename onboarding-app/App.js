import React from "react";
import { ActivityIndicator, SafeAreaView, Platform } from "react-native";
import styled from "styled-components";
import Providers from "./src/Context/Providers";
import { useFonts } from "expo-font";
import Main from "./src/Main";
const AppContainer = styled.SafeAreaView`
  flex: 1;
  /* padding-top: ${Platform.OS === "android" ? `25px` : 0}; */
`;

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return (
      <AppContainer>
        <ActivityIndicator color="black" size={100} />
      </AppContainer>
    );
  }
  return (
    <Providers>
      <AppContainer>
        <Main />
      </AppContainer>
    </Providers>
  );
}
