import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  Platform,
  StatusBar,
  Keyboard,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components";
import { TitleText, Paragraph, Container, Header } from "../styles/global";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";
const Reviews = styled.View``;

const ReviewTitle = styled.Text`
  font-size: 18px;
`;
const ReviewRating = styled.Text`
  font-size: 18px;
`;
const ReviewRatingStarCount = styled.Text`
  font-size: 18px;
`;

const ModalContent = styled.View`
  padding: 20px;
  padding-top: ${Platform.OS === "ios" ? "60px" : 20};
  background-color: #ddd;

  flex: 1;
`;
export const renderStars = (num) => {
  let stars = [];
  for (let i = 1; i <= num; i++) {
    stars.push(<Entypo name="heart" size={18} color="#e81607" />);
  }
  for (let i = stars.length; i < 5; i++) {
    stars.push(<Entypo name="heart-outlined" size={18} color="#e81607" />);
  }

  return stars;
};

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
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
        "Lorem ipsum dolor sit ame consectetur adipisicing elit. Quidem dolor a iusto quaerat sit iure fuga, aperiam mollitia cum exercitationem!",
      key: "2",
    },

    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body:
        "Lorem isum dolor sit, amet consectetur adipisicing elit. Reiciendis nihil repudiandae praesentium nam voluptatibus magni ipsa. Temporibus esse neque ratone",
      key: "3",
    },
  ]);

  console.log(reviews);
  const addReview = (review) => {
    setReviews((prev) => [
      { ...review, key: Math.floor(Math.random() * 10000).toString() },
      ...prev,
    ]);
    setModalOpen(false);
  };
  return (
    <Container>
      <Header>
        <TitleText>Game Reviews</TitleText>
        <MaterialIcons
          name="add"
          size={26}
          color="black"
          style={{
            border: "1px solid black",
          }}
          onPress={() => setModalOpen(true)}
        />
      </Header>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ModalContent>
            <MaterialIcons
              name="arrow-back-ios"
              size={26}
              color="#333"
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </ModalContent>
        </TouchableWithoutFeedback>
      </Modal>

      <Reviews>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <ReviewTitle>{item.title}</ReviewTitle>
                <ReviewRating>{renderStars(item.rating)}</ReviewRating>
              </Card>
            </TouchableOpacity>
          )}
        />
      </Reviews>
    </Container>
  );
}
