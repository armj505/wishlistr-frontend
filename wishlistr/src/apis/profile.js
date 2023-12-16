import { instance } from ".";

const getMyProfile = async () => {
  try {
    const response = await instance.get("/user");
    const userData = response.data;

    if (userData.image) {
      return userData.image;
    } else {
      return "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg";
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);

    return "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg";
  }
};

export { getMyProfile };
