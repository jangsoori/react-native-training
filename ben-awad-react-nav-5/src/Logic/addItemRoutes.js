import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditItem from "../Screens/EditItem";
import Item from "../Screens/Item";

export const addItemRoutes = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="Item"
        component={Item}
        options={({ route, navigation }) => ({
          headerTitle: route.params.name,
        })}
      />
      <Stack.Screen
        name="EditItem"
        component={EditItem}
        options={({ route }) => ({
          headerTitle: `Editing - ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                //submit the form
                route.params.submit?.current();
              }}
            >
              <Text>Save</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </>
  );
};
