import React from "react";
import { theme } from "../Styles/theme";
import { ThemeProvider as Theme } from "styled-components";

export default function ThemeProvider({ children }) {
  return <Theme theme={theme}>{children}</Theme>;
}
