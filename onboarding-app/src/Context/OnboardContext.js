import React from "react";

export const OnboardContext = React.createContext();
export default function OnboardProvider({ children }) {
  const [done, setDone] = React.useState(false);
  return (
    <OnboardContext.Provider value={{ done, setDone }}>
      {children}
    </OnboardContext.Provider>
  );
}
