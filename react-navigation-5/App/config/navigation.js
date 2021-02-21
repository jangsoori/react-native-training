import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";
import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";
import { Ionicons } from "@expo/vector-icons";
import Settings from "../screens/Settings";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Loading from "../screens/Loading";
import Modal from "../screens/Modal";
import { View } from "react-native";
//I can get {Navigator} and {Stack} from this instance
const ContactsStack = createStackNavigator();

function ContactsStackScreen() {
  return (
    //We can configure all screens at once with screenOptions prop
    //It will be overwritten by equivalent style headerStyle
    <ContactsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ccc" },
      }}
    >
      {/* Components will receive new prop - {navigation} */}
      <ContactsStack.Screen
        name="ContactsList"
        component={ContactsList}
        options={{
          headerTitle: "Contacts",
          headerStyle: {
            backgroundColor: "green",
          },
        }}
      />
      <ContactsStack.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={({ nav, route }) => {
          return {
            headerTitle: `${route.params.contact.name.title}. ${route.params.contact.name.first} ${route.params.contact.name.last}`,
          };
        }}
      />
    </ContactsStack.Navigator>
  );
}

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

//! BOTTOM TAB NAV
//Open modal from tab

const createNewPlaceHolder = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }}></View>
);
const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator
      tabBarOptions={{
        style: {},
        activeTintColor: "red",
        activeBackgroundColor: "blue",
      }}
      screenOptions={{
        tabBarLabel: "Text",
      }}
    >
      <AppTabs.Screen
        name="Create"
        component={createNewPlaceHolder}
        options={{
          //By default it takes name prop as label
          tabBarLabel: "Modal",
          tabBarIcon: (props) => (
            <Ionicons name="ios-add" size={props.size} color={props.color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("CreateNew");
          },
        })}
      />
      <AppTabs.Screen
        name="Contacts"
        component={ContactsStackScreen}
        options={{
          //By default it takes name prop as label
          tabBarLabel: "Contacts",
          tabBarIcon: (props) => (
            <Ionicons
              name="ios-people-outline"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
      <AppTabs.Screen
        name="Actions"
        component={ActionsStackScreen}
        options={{
          tabBarLabel: "Actions",
          tabBarIcon: (props) => (
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </AppTabs.Navigator>
  );
};
//! DRAWER NAVIGATION
const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  // DrawerType "back" "slide"
  <AppDrawer.Navigator drawerType="slide" drawerPosition="left">
    <AppDrawer.Screen
      name="Tabs"
      component={AppTabsScreen}
      options={{
        drawerLabel: "Home",
      }}
    />

    <AppDrawer.Screen
      name="Settings"
      component={Settings}
      options={{
        // ON THIS SCREEN SWIPE TO SHOW WILL NOT WORK.
        gestureEnabled: false,
      }}
    />
  </AppDrawer.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = (props) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        initialParams={{ auth: () => props.auth() }}
      />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const CreateNew = () => (
  <View style={{ backgroundColor: "red", flex: 1 }}></View>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isValidUser, setIsValidUser] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
    setTimeout(() => setIsValidUser(true), 2000);
  }, []);
  if (isLoading) {
    return <RootStack.Screen component={Loading} name="Loading" />;
  }
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      {/* <ContactsStackScreen /> */}
      {/* <AppTabsScreen /> */}
      {isValidUser ? (
        <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}
      <RootStack.Screen
        name="Alert"
        // name="CreateNew"
        component={Modal}
        // component={CreateNew}
        options={{
          animationEnabled: true,
          cardStyle: {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
          cardOverlayEnabled: true,
          cardStyleInterpolator: (input) => {
            const { current } = input;
            const { progress } = current;
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: "clamp",
                }),
              },
            };
          },
        }}
      />
      <RootStack.Screen
        name="Modal"
        component={Modal}
        options={{ animationEnabled: true }}
      />
    </RootStack.Navigator>
  );
};
export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
