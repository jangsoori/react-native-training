import React from "react";
import faker from "faker";
export const DataContext = React.createContext({});
export default function DataProvider({ children }) {
  const [data, setData] = React.useState(
    Array.from(Array(10), () => faker.commerce.product())
  );
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
