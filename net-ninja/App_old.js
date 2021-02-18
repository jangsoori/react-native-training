import { StatusBar } from "expo-status-bar";
import styled, { css, keyframes } from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Touchable,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  background-color: #e3814f;
  position: relative;
`;
const Header = styled.View`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 140px; ;
`;
const HeaderText = styled.Text`
  font-size: 40px;
  color: white;
  font-weight: 200;
`;

const Content = styled.View`
  flex: 1;
  width: 100%;
  background: white;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`;
const InputContainer = styled.View`
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 100%;
  background: #f4f4f4;
  padding: 30px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.TextInput`
  font-size: 24px;
  flex: 1;
  margin-right: 10px;
`;

const AddIconContainer = styled.View`
  background: #1bd10a;
  /* padding: 10px; */
  border-radius: 20px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;
const AddIcon = styled.Text`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;
const Footer = styled.View`
  height: 90px;
  color: black;
  background: #e3814f;
  width: 100%;
  z-index: 10;
`;
const Todos = styled.ScrollView`
  background: white;
  flex: 1;
  position: relative;
`;

const Todo = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  ${({ isEven }) =>
    !isEven &&
    css`
      background: #ddd;
    `};
`;
const TodoText = styled.Text`
  font-size: 24px;
`;

const EmptyImg = styled.Image`
  align-self: center;
  margin-top: 30%;
  flex: 1;
  width: 50%;
`;

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Go with Wallie", id: 1 },
    { text: "Go with trash", id: 2 },
  ]);
  const [input, setInput] = useState("");

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container>
        <Header>
          <HeaderText>donezo.</HeaderText>
        </Header>
        <Content>
          <InputContainer>
            <Input
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Anything to be done?"
            />

            <TouchableOpacity
              onPress={() => {
                input.length > 2
                  ? setTodos([
                      ...todos,
                      {
                        text: input,
                        id: Math.floor(Math.random() * 10000),
                      },
                    ])
                  : Alert.alert(
                      "Oh noes!",
                      "Input must be at least 3 characters long",
                      [{ text: "Got it!" }]
                    );
                Keyboard.dismiss();
                setInput("");
              }}
            >
              <Entypo
                name="add-to-list"
                size={30}
                color="#e3814f"
                onPress={() => {
                  input.length > 2
                    ? setTodos([
                        ...todos,
                        {
                          text: input,
                          id: Math.floor(Math.random() * 10000),
                        },
                      ])
                    : Alert.alert(
                        "Oh noes!",
                        "Input must be at least 3 characters long",
                        [{ text: "Got it!" }]
                      );
                  Keyboard.dismiss();
                  setInput("");
                }}
              />
            </TouchableOpacity>
          </InputContainer>
          <Todos>
            <View onStartShouldSetResponder={() => true}>
              {todos.length === 0 && (
                <EmptyImg
                  resizeMode={"contain"}
                  source={require("./assets/null.png")}
                />
              )}
              <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <Todo isEven={index % 2 === 0}>
                    <TodoText>{item.text}</TodoText>
                    <Entypo
                      name="cross"
                      size={24}
                      color="black"
                      onPress={() => {
                        setTodos(todos.filter((todo) => todo.id !== item.id));
                      }}
                    />
                  </Todo>
                )}
              />
            </View>
          </Todos>
        </Content>
        <Footer>
          <Text>Menu here yo</Text>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
