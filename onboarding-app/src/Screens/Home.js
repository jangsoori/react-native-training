import React from "react";
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar backgroundColor="#ddd" barStyle="dark-content" />
      <Text>Home page</Text>
    </View>
  );
}
