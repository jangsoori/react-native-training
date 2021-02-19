import React from "react";
import { Dimensions, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  /* background: rgba(0, 0, 0, 0.1); */
  width: ${Dimensions.get("window").width}px;
  height: 100%;
  padding: 0 10px;
`;

const Logo = styled.View`
  flex: 1;
  margin-left: 10px;
`;
const LogoText = styled.Text`
  font-size: 20px;
  font-family: "nunito-bold";
  text-align: center;
`;
export default function Header() {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <StyledHeader>
      <MaterialIcons onPress={openMenu} name="menu" size={32} color="black" />
      <Logo>
        <LogoText>GameZone</LogoText>
      </Logo>
    </StyledHeader>
  );
}
