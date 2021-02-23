import React from "react";
import ThemeProvider from "./ThemeContext";
import OnboardProvider from "../Context/OnboardContext";
export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <OnboardProvider>{children}</OnboardProvider>
    </ThemeProvider>
  );
}
