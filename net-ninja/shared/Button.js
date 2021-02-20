import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components";

const Container = styled.View`
  /* default color */
  background-color: ${({ color }) => color || "#039dfc"};
  padding: 10px 15px;
  border-radius: 8px;
`;

const BtnText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  text-align: center;
  align-self: center;
  font-size: 16px;
`;
export default function FlatButton(props) {
  return (
    <TouchableOpacity {...props}>
      <Container color={props.color}>
        <BtnText>{props.text}</BtnText>
      </Container>
    </TouchableOpacity>
  );
}
