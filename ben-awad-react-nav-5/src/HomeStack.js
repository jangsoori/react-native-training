import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeFeed from "./Screens/HomeFeed";
import { AuthContext } from "./AuthProvider";
import Item from "./Screens/Item";

const Stack = createStackNavigator();
export default function HomeStack() {
  const { logout } = React.useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: () => <Button title="Log Out" onPress={() => logout()} />,
      }}
    >
      <Stack.Screen name="HomeFeed" component={HomeFeed} />
      <Stack.Screen
        name="Item"
        component={Item}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
}
//TODO: START FROM 57:28
