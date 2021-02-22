import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";
import Center from "../Components/shared/Center";

export default function Register({ navigation, route }) {
  console.log(route);
  return (
    <Center>
      <Text>Am a Register Screen, sup mate! Register me in ;) iykwim</Text>
      <Button
        title="Go to login screen"
        onPress={() => navigation.navigate("Login")}
      />
    </Center>
  );
}
