import React from "react";
import { Text, View } from "react-native";
import Center from "../Components/shared/Center";

export default function Item({ route }) {
  return (
    <Center>
      <View>
        <Text>{route.params.name}</Text>
      </View>
    </Center>
  );
}
