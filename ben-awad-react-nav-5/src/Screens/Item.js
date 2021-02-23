import React from "react";
import { Button, Text, View } from "react-native";
import Center from "../Components/shared/Center";

export default function Item({ route, navigation }) {
  return (
    <Center>
      <View>
        <Text>{route.params.name}</Text>
        <Button
          title="Edit Item"
          color="green"
          onPress={() =>
            navigation.navigate("EditItem", {
              name: route.params.name,
            })
          }
        />
      </View>
    </Center>
  );
}
