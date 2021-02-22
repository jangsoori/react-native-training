import React from "react";
import AuthProvider from "./AuthProvider";
import Routes from "./Routes";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
