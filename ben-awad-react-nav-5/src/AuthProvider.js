import React from "react";
export const AuthContext = React.createContext({});
export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  console.log(user);
  const login = (name) => {
    const fakeUser = {
      userName: name,
    };

    setUser(fakeUser);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
