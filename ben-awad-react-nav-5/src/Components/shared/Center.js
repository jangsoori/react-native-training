import React from "react";
import styled from "styled-components";
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export default function Center({ children }) {
  return <Container>{children}</Container>;
}
