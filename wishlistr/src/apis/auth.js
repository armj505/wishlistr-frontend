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

const login = async (emailOrPhone, password) => {
  const response = await instance.post("/auth/signIn", {
    emailOrPhone,
    password,
  });
  if (response?.data?.token) {
    await saveToken(response.data.token);
  }
  return response.data;
};

const forgotPassword = async (email) => {
  const response = await instance.post("/auth/forgot-password", {
    email,
  });
  return response.data;
};

const resetPassword = async (resetToken, password) => {
  const response = await instance.post(`/auth/reset-password/${resetToken}`, {
    password,
  });
  return response.data;
};

export { register, login, forgotPassword, resetPassword };
