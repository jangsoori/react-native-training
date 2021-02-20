import React from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
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
  position: relative;
`;

const Logo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LogoText = styled.Text`
  font-size: 20px;
  font-family: "nunito-bold";
  text-align: center;
  letter-spacing: 2px;
`;
const LogoImg = styled.Image`
  width: 26px;
  height: 26px;
  margin-right: 5px;
`;
export default function Header() {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <StyledHeader>
        <MaterialIcons
          style={{ zIndex: 2, position: "absolute", left: 16 }}
          onPress={openMenu}
          name="menu"
          size={32}
          color="black"
        />

        <Logo>
          <LogoImg source={require("../assets/heart_logo.png")} />
          <LogoText>GameZone</LogoText>
        </Logo>
      </StyledHeader>
    </ImageBackground>
  );
}
