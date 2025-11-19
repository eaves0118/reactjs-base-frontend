import axiosClient from "./axios";

const login = async (body) => {
  return await axiosClient.post("/login", body);
};
const refreshToken = async (token) => {
  return await axiosClient.post("/refresh-token", { token });
};
export { login, refreshToken };
