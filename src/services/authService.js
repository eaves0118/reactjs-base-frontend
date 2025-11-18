import axiosClient from "./axios";

const login = async (body) => {
  return await axiosClient.post("/login", body);
};

export { login };
