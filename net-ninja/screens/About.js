import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  padding: 24px;
`;
export default function About() {
  return (
    <Container>
      <Text>About Screen</Text>
    </Container>
  );
}
