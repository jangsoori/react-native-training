import React from "react";
import { Button, Text, View, TextInput } from "react-native";
import { Formik } from "formik";
import { Container, Input } from "../styles/global";
import * as yup from "yup";
import styled from "styled-components";
import FlatButton from "../shared/Button";

const InputContainer = styled.View`
  margin-bottom: 10px;
`;
const Error = styled.Text`
  color: #cf281f;
  font-weight: bold;
  font-style: italic;
`;
const ReviewSchema = yup.object({
  title: yup.string().required().min(3),
  body: yup.string().required().min(10),
  rating: yup
    .string()
    .required()
    .test(
      "is-1-5",
      "Rating must be a number 1- 5",
      (val) => parseInt(val) < 6 && parseInt(val) > 0
    ),
});

export default function ReviewForm({ addReview }) {
  const onSubmit = (values) => {
    addReview(values);
  };
  return (
    <Container>
      <Formik
        validationSchema={ReviewSchema}
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        {(formikProps) => (
          <View>
            <InputContainer>
              <Input
                hasError={formikProps.touched.title && formikProps.errors.title}
                placeholder="Title"
                onChangeText={formikProps.handleChange("title")}
                value={formikProps.values.title}
                onBlur={formikProps.handleBlur("title")}
              />
              {formikProps.touched.title && (
                <Error>{formikProps.errors.title}</Error>
              )}
            </InputContainer>
            <InputContainer>
              <Input
                hasError={formikProps.touched.body && formikProps.errors.body}
                multiline
                placeholder="Your rant"
                onChangeText={formikProps.handleChange("body")}
                value={formikProps.values.body}
                onBlur={formikProps.handleBlur("body")}
              />
              {formikProps.touched.body && (
                <Error>{formikProps.errors.body}</Error>
              )}
            </InputContainer>
            <InputContainer>
              <Input
                hasError={
                  formikProps.touched.rating && formikProps.errors.rating
                }
                multiline
                placeholder="Rating (1-5)"
                onChangeText={formikProps.handleChange("rating")}
                value={formikProps.values.rating}
                onBlur={formikProps.handleBlur("rating")}
              />
              {formikProps.touched.rating && (
                <Error>{formikProps.errors.rating}</Error>
              )}
            </InputContainer>
            <FlatButton
              text="submit"
              onPress={() => {
                formikProps.handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </Container>
  );
}
