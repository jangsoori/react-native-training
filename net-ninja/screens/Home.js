import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";
import { TitleText, Paragraph } from "../styles/global";
const Container = styled.View`
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;

export default function Home({ navigation }) {
  console.log(navigation);
  return (
    <Container>
      <TitleText>Home</TitleText>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quod
        corporis possimus, facilis cum distinctio corrupti dignissimos culpa
        nostrum voluptatum.
      </Paragraph>
      <Button
        title="reviews"
        onPress={() => navigation.navigate("ReviewDetails")}
      />
    </Container>
  );
}
