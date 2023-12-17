import { instance } from ".";

const getMyProfile = async () => {
  const response = await instance.get("/user");
  return response.data;
};

const updateMyProfile = async (
  firstName,
  lastName,
  gender,
  email,
  phoneNumber,
  image
) => {
  const formData = new FormData();
  if (firstName) {
    formData.append("name[firstName]", firstName);
  }
  if (lastName) {
    formData.append("name[lastName]", lastName);
  }
  if (gender) {
    formData.append("gender", gender);
  }
  if (email) {
    formData.append("email", email);
  }
  if (phoneNumber) {
    formData.append("phoneNumber", phoneNumber);
  }

  if (image !== null && image !== undefined) {
    formData.append("image", image);
  }
  const response = await instance.put("/user", formData);
  return response.data;
};
const testUpdate = async (gender) => {
  const response = await instance.put("/user", {
    gender,
  });
  return response.data;
};

export { getMyProfile, updateMyProfile };
