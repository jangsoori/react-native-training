import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Button title="GoBack" onPress={() => navigation.goBack()} />
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button
        title="To actions"
        onPress={() =>
          navigation.navigate("Tabs", {
            screen: "Actions",
            params: "YO",
          })
        }
      />
    </SafeAreaView>
  );
}
