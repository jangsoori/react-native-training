import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeFeed from "../Screens/HomeFeed";
import { AuthContext } from "../Context/AuthProvider";
import Item from "../Screens/Item";
import EditItem from "../Screens/EditItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addItemRoutes } from "../Logic/addItemRoutes";
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
      {addItemRoutes(Stack)}
    </Stack.Navigator>
  );
}
//TODO: START FROM 57:28
