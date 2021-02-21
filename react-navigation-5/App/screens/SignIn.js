import React from "react";
import { Button } from "react-native";

export default function SignIn(props) {
  return (
    <>
      <Button title="Sign in" onPress={() => null} />
      <Button title="Sign up" onPress={() => props.navigation.push("SignUp")} />
    </>
  );
}
