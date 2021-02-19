import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { TitleText, Paragraph, Container, Header } from "../styles/global";
import { Entypo } from "@expo/vector-icons";
const Reviews = styled.View``;
const Review = styled.View`
  border: 1px dashed #999;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReviewTitle = styled.Text`
  font-size: 18px;
  flex: 1;
`;
const ReviewRating = styled.Text`
  font-size: 18px;
`;
const ReviewRatingStarCount = styled.Text`
  font-size: 18px;
`;
export const renderStars = (num) => {
  let stars = [];
  for (let i = 1; i <= num; i++) {
    stars.push(<Entypo name="star" size={18} color="#b3cf19" />);
  }
  for (let i = stars.length; i < 5; i++) {
    stars.push(<Entypo name="star-outlined" size={18} color="#b3cf19" />);
  }

  return stars;
};

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum a quos corporis! Ea sint ad tenetur voluptatum provident esse?",
      key: "1",
    },

    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor a iusto quaerat sit iure fuga, aperiam mollitia cum exercitationem!",
      key: "2",
    },

    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nihil repudiandae praesentium nam voluptatibus magni ipsa. Temporibus esse neque ratione.",
      key: "3",
    },
  ]);

  return (
    <Container>
      <Header>
        <TitleText>Game Reviews</TitleText>
      </Header>
      <Reviews>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Review>
                <ReviewTitle>{item.title}</ReviewTitle>
                <ReviewRating>{renderStars(item.rating)}</ReviewRating>
              </Review>
            </TouchableOpacity>
          )}
        />
      </Reviews>
    </Container>
  );
}
