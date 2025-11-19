import React, { createContext, useState, useEffect } from "react";
import { login } from "../services/authService";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const parseJWT = (token) => {
    const base64Payload = token.split(".")[1];
    return JSON.parse(atob(base64Payload));
  };

  const isValidToken = (token) => {
    const decoded = parseJWT(token);
    if (!decoded) return false;
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (storedUser && storedAccessToken && storedRefreshToken && isValidToken(storedAccessToken)) {
      setUser(storedUser);
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    } else {
      signOut();
    }
    setLoading(false); // đã load xong
  }, []);

  const signIn = async ({ email, password }) => {
    const result = await login({ email, password });
    const { accessToken, refreshToken, name, mail, roles } = result.data.data;
    const userData = { name, mail, roles };
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setUser(userData);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userData", JSON.stringify(userData));

    return roles;
  };
  const signOut = async () => {
    setUser({ name: "", mail: "" });
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");
  };
  return (
    <AuthContext.Provider value={{ user, accessToken, refreshToken, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
