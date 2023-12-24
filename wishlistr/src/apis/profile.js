import { instance } from ".";

const getMyProfile = async () => {
  const response = await instance.get("/user");
  return response.data;
};

export { getMyProfile };
