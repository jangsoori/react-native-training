import React from "react";
import AuthProvider from "./AuthProvider";
import DataProvider from "./DataProvider";
import Routes from "../Nav/Routes";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <DataProvider>
        <Routes />
      </DataProvider>
    </AuthProvider>
  );
}
