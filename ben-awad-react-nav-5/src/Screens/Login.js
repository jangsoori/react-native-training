import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthProvider";
import Center from "../Components/shared/Center";

export default function Login({ navigation }) {
  const [name, setName] = React.useState();
  const { login, user } = React.useContext(AuthContext);
  return (
    <Center>
      <Text>Am a Login Screen, sup mate! Log me in ;) iykwim</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Button title="Login" onPress={() => login(name)} />
    </Center>
  );
}
