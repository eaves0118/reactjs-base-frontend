import React, { createContext, useState } from "react";
import { login } from "../services/authService";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", mail: "" });
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const signIn = async ({ email, password }) => {
    const result = await login({ email, password });
    const { accessToken, refreshToken, name, mail } = result.data.data;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setUser({ name, mail });
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };
  const signOut = async () => {
    setUser({ name: "", mail: "" });
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };
  return (
    <AuthContext.Provider value={{ user, accessToken, refreshToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
