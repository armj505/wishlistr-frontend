import { instance } from ".";

const register = async (email, phoneNumber, firstName, lastName, password) => {
  const response = await instance.post("/api/auth/register", {
    email,
    phoneNumber,
    firstName,
    lastName,
    password,
  });
  return response.data;
};

export { register };
