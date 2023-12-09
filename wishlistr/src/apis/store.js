import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

const saveToken = async (token) => {
  await SecureStore.setItemAsync("token", token);
};
const getToken = async () => {
  const token = await SecureStore.getItemAsync("token");
  if (token) return token;
  return null;
};
const deleteToken = async () => {
  await SecureStore.deleteItemAsync("token");
};

const checkToken = async () => {
  const token = await getToken();

  console.log("Token:", token);

  if (token) {
    try {
      const user = jwtDecode(token);
      console.log("Decoded User:", user);
      return user;
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  }

  return false;
};
export { saveToken, getToken, deleteToken, checkToken };
