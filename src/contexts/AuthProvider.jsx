import React, { createContext, useState, useEffect } from "react";
import { login, refreshToken as apiRefreshToken } from "../services/authService";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const parseJWT = (token) => {
    if (!token) return null;
    const base64Payload = token.split(".")[1];
    return JSON.parse(atob(base64Payload));
  };

  const isValidToken = (token) => {
    const decoded = parseJWT(token);
    if (!decoded) return false;
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  };

  const getTimeUntilExpiry = (token) => {
    const decoded = parseJWT(token);
    if (!decoded) return 0;
    const currentTime = Date.now() / 1000;
    return decoded.exp - currentTime;
  };

  const scheduleTokenRefresh = (token, refreshToken) => {
    if (!token || !refreshToken) return;

    const timeUntilExpiry = getTimeUntilExpiry(token);

    if (timeUntilExpiry > 5) {
      // Refresh trước 5 giây
      const refreshTime = (timeUntilExpiry - 5) * 1000;
      // console.log(`Sẽ refresh token sau ${refreshTime}ms`);

      setTimeout(() => {
        handleRefreshToken(refreshToken);
      }, refreshTime);
    } else if (timeUntilExpiry > 0) {
      // Nếu còn ít hơn 5 giây nhưng vẫn còn hạn, refresh ngay
      // console.log("Token sắp hết hạn, refresh ngay");
      handleRefreshToken(refreshToken);
    } else {
      // console.log("Token đã hết hạn");
      signOut();
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (storedUser && storedAccessToken && storedRefreshToken && isValidToken(storedAccessToken)) {
      setUser(storedUser);
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      scheduleTokenRefresh(storedAccessToken, storedRefreshToken);
      // console.log("Token còn hạn");
    } else {
      // console.log("Token hết hạn");
      signOut();
    }
    setLoading(false); // đã load xong
  }, []);

  const handleRefreshToken = async (token) => {
    if (!token) {
      return null;
    }
    try {
      const res = await apiRefreshToken(token);
      const newAccessToken = res.data.data.accessToken;
      setAccessToken(newAccessToken);
      localStorage.setItem("accessToken", newAccessToken);
      // console.log("Access token đã được refresh");
      scheduleTokenRefresh(newAccessToken, token);
      return newAccessToken;
    } catch (error) {
      // console.log("Refresh token lỗi hoặc hết hạn");
      signOut();
      return null;
    }
  };

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
    scheduleTokenRefresh(accessToken, refreshToken);
    return roles;
  };
  const signOut = async () => {
    setUser(null);
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
