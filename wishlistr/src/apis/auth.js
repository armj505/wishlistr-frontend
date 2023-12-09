import { instance } from ".";
import { saveToken } from "./store";

const register = async (email, phoneNumber, firstName, lastName, password) => {
  const response = await instance.post("/auth/register", {
    email,
    phoneNumber,
    name: { firstName, lastName },
    password,
  });

  return response.data;
};

const login = async (email, password) => {
  const response = await instance.post("/auth/signIn", {
    email,
    password,
  });
  if (response?.data?.token) {
    await saveToken(response.data.token);
  }
  return response.data;
};

export { register, login };
