import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const StyledCard = styled.View`
  border-radius: 6px;
  elevation: 3;
  background: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  /* padding: 5px; */
  margin: 6px 4px;
`;
const CardContent = styled.View`
  margin: 20px 18px;
`;

export default function Card({ children }) {
  return (
    <StyledCard>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
}
