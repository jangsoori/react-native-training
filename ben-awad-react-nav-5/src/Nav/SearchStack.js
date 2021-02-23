import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Components/SearchForm";
import Item from "../Screens/Item";
import EditItem from "../Screens/EditItem";
import { addItemRoutes } from "../Logic/addItemRoutes";
const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      {addItemRoutes(Stack)}
    </Stack.Navigator>
  );
}
