import React from "react";
import { Text, View, SafeAreaView, StatusBar, Image } from "react-native";
import styled, { ThemeContext, useTheme } from "styled-components";
import AppIntroSlider from "react-native-app-intro-slider";
import { OnboardContext } from "../Context/OnboardContext";
const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;
const Item = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;
const ItemImg = styled.Image`
  width: 350px;
  height: 350px;
  margin-bottom: 37px;
`;
const ItemTitle = styled.Text`
  font-size: 24px;

  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  line-height: 32;
  margin-bottom: 21px;
  width: 80%;
`;
const ItemText = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  width: 80%;
  font-size: 14px;
  line-height: 19px;
`;

const BottomBtn = styled.Text`
  color: ${({ color }) => color};
  font-size: 18px;
  line-height: 25px;
  font-family: "OpenSansSemiBold";
  margin-top: 11px;
`;

const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    image: require("../../assets/images/time.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("../../assets/images/books.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../../assets/images/basket.png"),
  },
];

export default function Onboard() {
  const theme = React.useContext(ThemeContext);
  const { setDone } = React.useContext(OnboardContext);
  const renderItem = (item) => (
    <Item>
      <ItemImg source={item.image} />
      <ItemTitle>{item.title}</ItemTitle>
      <ItemText>{item.text}</ItemText>
    </Item>
  );

  const renderNextButton = () => {
    return <BottomBtn color={theme.colors.blue}>Next</BottomBtn>;
  };
  const renderPrevButton = () => {
    return <BottomBtn color={theme.colors.black}>Prev</BottomBtn>;
  };
  const renderDoneButton = () => {
    return <BottomBtn color="green">Done</BottomBtn>;
  };
  return (
    <Wrapper>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        activeDotStyle={{ backgroundColor: theme.colors.blue }}
        //55 at the end stands for opacity. 00 is fully transparent, ff is solid
        dotStyle={{ backgroundColor: `${theme.colors.blue}55` }}
        keyExtractor={(item) => item.title}
        data={data}
        renderItem={({ item }) => renderItem(item)}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={() => setDone(true)}
      />
    </Wrapper>
  );
}
