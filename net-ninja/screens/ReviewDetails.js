import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";
import { Container, Paragraph, TitleText } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  return (
    <Container>
      <TitleText>Review Details Screen</TitleText>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quidem
        facilis commodi. Earum id tenetur tempore eius, dolorum temporibus rem?
      </Paragraph>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </Container>
  );
}
