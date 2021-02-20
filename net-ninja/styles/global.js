import { View, Text, Platform, TextInput } from "react-native";

import styled, { css } from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;

  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const TitleText = styled.Text`
  font-family: "nunito-bold";
  font-size: 18px;
  color: #333;
`;
export const Paragraph = styled.Text`
  line-height: 20px;
`;

export const Input = styled.TextInput`
  background: #fff;
  font-size: 18px;
  elevation: 5;
  border: 1px solid #aaa;
  padding: 5px 10px;
  border-radius: 5px;
  ${({ hasError }) =>
    hasError &&
    css`
      border: 1px solid #cf281f;
    `}
`;
