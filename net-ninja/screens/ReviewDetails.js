import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";
import { Container, Paragraph, TitleText, Header } from "../styles/global";
import { renderStars } from "./Home";

const Rating = styled.View`
  flex-direction: row;
`;
export default function ReviewDetails(props) {
  console.log(props);
  const { body, key, rating, title } = props.route.params;
  return (
    <Container>
      <Header>
        <TitleText>{title}</TitleText>
        <Rating>{renderStars(rating && rating)}</Rating>
      </Header>
      <Paragraph>{body}</Paragraph>
    </Container>
  );
}
