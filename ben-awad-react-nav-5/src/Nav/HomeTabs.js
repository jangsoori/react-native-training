import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";
const BottomTabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return null;
        },
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
          tabBarBadge: "1",
          tabBarBadgeStyle: { fontSize: 12, width: 20, height: 20 },
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="ios-search" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
