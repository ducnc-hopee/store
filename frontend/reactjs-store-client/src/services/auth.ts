import axios from "axios";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  user: string;
  iat: number;
};

const baseURL = "http://localhost:8765";

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${baseURL}/auth/login`, {
    username,
    password,
  });

  const token = response.data.token;
  localStorage.setItem("token", token);

  const decoded: DecodedToken = jwtDecode(token);
  localStorage.setItem("username", decoded.user);

  return token;
};

export const add = async (username: string, email: string, password: string) => {
  const data = {
    username,
    email,
    password,
  };
  try {
    const response = await axios.post(`${baseURL}/users`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const deleteAccount = async (userId: string) => {
  try {
    const res = await axios.delete(`${baseURL}/users/${userId}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting account:", err);
    throw err;
  }
};
export const updateAccount = async (userId: string, data: any) => {
  const token = localStorage.getItem("token");
  const res = await axios.put(`${baseURL}/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getUser = async (userId: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseURL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
