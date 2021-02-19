import { View, Text, Platform } from "react-native";

import styled from "styled-components";

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
