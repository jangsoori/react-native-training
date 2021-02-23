import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../Context/AuthProvider";
import Tabs from "./HomeTabs";
import AuthStack from "./AuthStack";

export default function Routes() {
  const { user } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <Tabs />}
    </NavigationContainer>
  );
}
