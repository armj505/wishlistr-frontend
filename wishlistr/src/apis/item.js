import { instance } from ".";

const getAllItems = async () => {
  const { data } = await instance.get("/item");
  return data;
};

const getItem = async (itemId) => {
  const { data } = await instance.get(`/item/${itemId}`);
  return data;
};

export { getAllItems, getItem };
